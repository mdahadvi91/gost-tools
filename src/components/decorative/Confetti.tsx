import { useEffect, useRef, useCallback } from "react";
import { cn } from "@lib/cn";
import { useReducedMotion } from "@hooks/useReducedMotion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  life: number;
  maxLife: number;
}

interface ConfettiProps {
  /** Called via ref to trigger burst */
  trigger?: number;
  particleCount?: number;
  duration?: number;
  className?: string;
}

const COLORS = ["#4DD9FF", "#5B9BFF", "#8B5CF6", "#C084FC", "#FF5F8F", "#FFB84D"];

export function Confetti({
  trigger = 0,
  particleCount = 80,
  duration = 2200,
  className,
}: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>();
  const prefersReduced = useReducedMotion();

  const burst = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReduced) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.3;
      const speed = 4 + Math.random() * 8;
      newParticles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: 4 + Math.random() * 6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        life: 0,
        maxLife: 60 + Math.random() * 40,
      });
    }
    particlesRef.current.push(...newParticles);
  }, [particleCount, prefersReduced]);

  useEffect(() => {
    if (trigger > 0) burst();
  }, [trigger, burst]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => {
        p.life++;
        p.vy += 0.25;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        const alpha = Math.max(0, 1 - p.life / p.maxLife);
        if (alpha <= 0) return false;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();

        return p.life < p.maxLife;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (prefersReduced) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[9995] pointer-events-none",
        className
      )}
    />
  );
}