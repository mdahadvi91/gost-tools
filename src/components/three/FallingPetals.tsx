import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FallingPetalsProps {
  count?: number;
}

export function FallingPetals({ count = 100 }: FallingPetalsProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Petal data
  const petalData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 20,
      y: Math.random() * 20 - 10,
      z: (Math.random() - 0.5) * 12 - 2,
      speed: 0.3 + Math.random() * 0.6,
      rotationSpeed: (Math.random() - 0.5) * 0.6,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleAmp: 0.4 + Math.random() * 0.6,
      scale: 0.08 + Math.random() * 0.12,
    }));
  }, [count]);

  const geometry = useMemo(() => {
    // Simple petal shape
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.5, 0.5, 0.5, 1.5, 0, 2);
    shape.bezierCurveTo(-0.5, 1.5, -0.5, 0.5, 0, 0);
    return new THREE.ShapeGeometry(shape);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    petalData.forEach((p, i) => {
      // Fall down
      let y = p.y - ((t * p.speed) % 20);
      if (y < -10) y += 20;

      // Wobble side-to-side
      const x = p.x + Math.sin(t * 0.8 + p.wobblePhase) * p.wobbleAmp;

      dummy.position.set(x, y, p.z);
      dummy.rotation.x = t * p.rotationSpeed;
      dummy.rotation.z = t * p.rotationSpeed * 0.5;
      dummy.rotation.y = Math.sin(t * 0.5 + p.wobblePhase) * 0.5;
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, undefined, count]}
    >
      <meshBasicMaterial
        color="#FFB3C6"
        transparent
        opacity={0.7}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
}
