import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function CameraRig() {
  const { camera, pointer } = useThree();
  const targetRef = useRef(new THREE.Vector3(0, 0, 9));

  useFrame((_, delta) => {
    // Smoothly interpolate camera position toward pointer
    const targetX = pointer.x * 1.5;
    const targetY = pointer.y * 1.2;
    const targetZ = 9 + Math.sin(Date.now() * 0.0004) * 0.3;

    targetRef.current.set(targetX, targetY, targetZ);

    camera.position.lerp(targetRef.current, Math.min(1, delta * 2));
    camera.lookAt(0, 0, 0);
  });

  return null;
}
