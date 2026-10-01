import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GlowingHeartCoreProps {
  position?: [number, number, number];
  scale?: number;
}

export function GlowingHeartCore({
  position = [0, 0, 0],
  scale = 1,
}: GlowingHeartCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const heartRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Create heart shape
  const heartGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0;
    const y = 0;

    shape.moveTo(x + 0.5, y + 0.5);
    shape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
    shape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
    shape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9);
    shape.bezierCurveTo(
      x + 1.2,
      y + 1.54,
      x + 1.6,
      y + 1.1,
      x + 1.6,
      y + 0.7
    );
    shape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y);
    shape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);

    const extrudeSettings = {
      depth: 0.4,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.08,
      bevelSegments: 4,
      curveSegments: 24,
    };

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center();
    return geo;
  }, []);

  // Glow sphere geometry (soft halo)
  const glowGeometry = useMemo(
    () => new THREE.SphereGeometry(1.8, 32, 32),
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.25;
      groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.15;
    }

    // Heartbeat pulse — real heartbeat pattern
    if (heartRef.current) {
      const beat =
        1 +
        Math.sin(t * 4) * 0.04 +
        Math.sin(t * 8) * 0.02 +
        Math.max(0, Math.sin(t * 2)) * 0.06;
      heartRef.current.scale.setScalar(beat);
    }

    // Glow breathing
    if (glowRef.current) {
      const glowPulse = 1 + Math.sin(t * 1.5) * 0.15;
      glowRef.current.scale.setScalar(glowPulse);
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Main heart */}
      <mesh ref={heartRef} geometry={heartGeometry} castShadow>
        <meshStandardMaterial
          color="#FF6B9D"
          emissive="#D946A6"
          emissiveIntensity={0.8}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Inner glow sphere (halo) */}
      <mesh ref={glowRef} geometry={glowGeometry}>
        <meshBasicMaterial
          color="#FF6B9D"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Second halo — wider */}
      <mesh scale={1.5}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial
          color="#C8A2FF"
          transparent
          opacity={0.04}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
