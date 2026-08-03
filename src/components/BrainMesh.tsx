"use client";

import React, { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface GLTFResult {
  scene: THREE.Object3D;
  nodes: { [key: string]: THREE.Mesh };
}

export default function BrainMesh(): React.JSX.Element {
  const { scene } = useGLTF("/models/brain.new.model.glb") as unknown as GLTFResult;

  useLayoutEffect(() => {
    scene.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh) return;

      mesh.castShadow = true;
      mesh.receiveShadow = true;

      const geometry = mesh.geometry;
      const vertexCount = geometry.attributes.position ? geometry.attributes.position.count : 0;

      if (vertexCount < 2000 || mesh.name.toLowerCase().includes("glow") || mesh.name.toLowerCase().includes("point")) {
        mesh.material = new THREE.MeshBasicMaterial({
          color: new THREE.Color("#FF4C29"),
        });
      } else {
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: "#e2e8f0",
          roughness: 0.1,
          metalness: 0.1,
          transparent: true,
          opacity: 0.25,
          transmission: 0.6,
          ior: 1.5,
          side: THREE.DoubleSide,
          depthWrite: false,
        });
      }

      mesh.material.needsUpdate = true;
    });
  }, [scene]);

  return <primitive object={scene} />;
}

useGLTF.preload("/models/brain.new.model.glb");