import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { cn } from "@lib/cn";
import { useReducedMotion } from "@hooks/useReducedMotion";
import { CameraRig } from "./CameraRig";
import { FloatingParticles } from "./FloatingParticles";
import { GlowingHeartCore } from "./GlowingHeartCore";
import { FallingPetals } from "./FallingPetals";

interface CinematicBackgroundProps {
  className?: string;
}

export function CinematicBackground({ className }: CinematicBackgroundProps) {
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Reduced motion fallback — static gradient
  if (prefersReduced) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "fixed inset-0 -z-10",
          "bg-[radial-gradient(ellipse_at_top,_rgba(255,107,157,0.15),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(200,162,255,0.12),_transparent_60%)]",
          "bg-love-black",
          className
        )}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 -z-10 pointer-events-none",
        "bg-love-black",
        className
      )}
    >
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#1A0F1A", 1);
        }}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} color="#FF6B9D" intensity={0.6} />
          <pointLight position={[-5, -5, 3]} color="#C8A2FF" intensity={0.5} />
          <pointLight position={[0, 0, 6]} color="#FFD9A0" intensity={0.3} />

          {/* Camera */}
          <CameraRig />

          {/* 3D elements */}
          <GlowingHeartCore position={[0, 0, 0]} scale={isMobile ? 0.65 : 0.9} />
          <FloatingParticles count={isMobile ? 400 : 1200} radius={14} />
          <FallingPetals count={isMobile ? 40 : 100} />
        </Suspense>
      </Canvas>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(26,15,26,0.7)_100%)] pointer-events-none" />
    </div>
  );
}
