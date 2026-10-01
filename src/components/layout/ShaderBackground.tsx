import { useEffect, useRef } from "react";
import { cn } from "@lib/cn";
import { useReducedMotion } from "@hooks/useReducedMotion";

interface ShaderBackgroundProps {
  className?: string;
  intensity?: number;
}

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform float u_intensity;

  vec3 palette(float t) {
    vec3 c1 = vec3(1.0, 0.420, 0.616);    // rose #FF6B9D
    vec3 c2 = vec3(0.851, 0.275, 0.651);  // deep #D946A6
    vec3 c3 = vec3(0.784, 0.635, 1.0);    // lavender #C8A2FF
    vec3 c4 = vec3(1.0, 0.851, 0.627);    // gold #FFD9A0
    return c1 + (c2 - c1) * smoothstep(0.0, 0.33, t)
            + (c3 - c2) * smoothstep(0.33, 0.66, t)
            + (c4 - c3) * smoothstep(0.66, 1.0, t);
  }

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);

    float t = u_time * 0.06;

    // Mouse influence — soft pull
    vec2 mouse = (u_mouse - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
    float mouseDist = length(p - mouse);
    float mouseGlow = smoothstep(0.7, 0.0, mouseDist) * 0.45;

    // Layered gentle waves (like drifting petals)
    float n1 = noise(p * 1.3 + vec2(t * 0.5, t * 0.35));
    float n2 = noise(p * 2.0 - vec2(t * 0.35, t * 0.55));
    float n3 = noise(p * 0.8 + vec2(t * 0.25, -t * 0.4));

    float combined = (n1 * 0.45 + n2 * 0.3 + n3 * 0.25);
    float gradientT = combined * 0.55 + mouseGlow * 0.5;

    vec3 color = palette(gradientT);

    // Soft radial vignette
    float vignette = 1.0 - smoothstep(0.55, 1.5, length(uv - 0.5));
    color *= (0.35 + vignette * 0.4) * u_intensity;

    // Add subtle pinkish tint
    color += vec3(0.05, 0.0, 0.03);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function ShaderBackground({
  className,
  intensity = 1.0,
}: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uIntensity = gl.getUniformLocation(program, "u_intensity");

    let mouseX = 0;
    let mouseY = 0;
    let rafId = 0;
    const startTime = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = window.innerWidth * dpr;
      const h = window.innerHeight * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        gl.viewport(0, 0, w, h);
      }
      mouseX = w / 2;
      mouseY = h / 2;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      mouseX = e.clientX * dpr;
      mouseY = (window.innerHeight - e.clientY) * dpr;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.uniform1f(uIntensity, intensity);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      rafId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, [intensity, prefersReduced]);

  if (prefersReduced) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "fixed inset-0 -z-10 bg-aurora-subtle",
          className
        )}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        "fixed inset-0 -z-10 w-full h-full pointer-events-none",
        className
      )}
    />
  );
}