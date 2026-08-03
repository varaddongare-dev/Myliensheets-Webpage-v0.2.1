"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type ScrollState = {
  current: number;
  target: number;
  velocity: number;
};

function LoadingFallback(): React.JSX.Element {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "2px solid rgba(15, 23, 42, 0.08)",
          borderTop: "2px solid #0f172a",
          animation: "brain-spin 1s linear infinite",
        }}
      />
      <style>{`@keyframes brain-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function FloatingParticles({ count = 40 }: { count?: number }): React.JSX.Element {
  const pointsRef = useRef<THREE.Points>(null);
  
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3;
      spd[i] = 0.05 + Math.random() * 0.1;
    }
    return [pos, spd];
  }, [count]);

  useFrame((state, delta) => {
    const points = pointsRef.current;
    if (!points) return;
    
    const geo = points.geometry;
    const posArr = geo.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += speeds[i] * delta;
      posArr[i * 3] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.001;
      
      if (posArr[i * 3 + 1] > 2.5) {
        posArr[i * 3 + 1] = -2.5;
      }
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#0f172a"
        size={0.015}
        transparent
        opacity={0.25}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

interface BrainModelProps {
  isMobileDevice: boolean;
  onLoaded?: () => void;
  studioLightRef: React.RefObject<THREE.DirectionalLight | null>;
}

function BrainModel({ isMobileDevice, onLoaded, studioLightRef }: BrainModelProps): React.JSX.Element {
  const gltf = useGLTF("/models/brainmodel.glb");

  const groupRef = useRef<THREE.Group>(null);
  const scrollRef = useRef<ScrollState>({ current: 0, target: 0, velocity: 0 });
  const pointerRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const elapsedRef = useRef(0);
  const materialApplied = useRef(false);
  const isVisible = useRef(true);
  const materialsRef = useRef<THREE.MeshPhysicalMaterial[]>([]);

  const { invalidate } = useThree();
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);

  useEffect(() => {
    if (materialApplied.current) return;
    materialApplied.current = true;

    scene.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh) return;

      mesh.castShadow = false;
      mesh.receiveShadow = false;

      const currentMaterial = mesh.material as THREE.MeshStandardMaterial;
      if (!currentMaterial) return;

      const baseColor = currentMaterial.color.clone();
      const isRedSegment = baseColor.r > 0.6 && baseColor.g < 0.2 && baseColor.b < 0.2;

      const physicalMat = new THREE.MeshPhysicalMaterial({
        color: isRedSegment ? new THREE.Color("#e11d48") : new THREE.Color("#ffffff"),
        roughness: isMobileDevice ? 0.35 : 0.18,
        metalness: isMobileDevice ? 0.05 : 0.08,
        clearcoat: isMobileDevice ? 0.2 : 1.0,
        clearcoatRoughness: 0.1,
        transmission: isMobileDevice ? 0.0 : isRedSegment ? 0.55 : 0.45,
        thickness: isMobileDevice ? 0.0 : 1.2,
        ior: 1.48,
        specularIntensity: 0.8,
        envMapIntensity: 1.0,
      });

      physicalMat.onBeforeCompile = (shader) => {
        shader.uniforms.uFresnelColor = { 
          value: isRedSegment ? new THREE.Color("#fda4af") : new THREE.Color("#cbd5e1") 
        };
        shader.uniforms.uFresnelPower = { value: 3.0 };
        
        shader.fragmentShader = `
          uniform vec3 uFresnelColor;
          uniform float uFresnelPower;
          ${shader.fragmentShader}
        `.replace(
          "vec4 diffuseColor = vec4( diffuse, opacity );",
          `
          vec4 diffuseColor = vec4( diffuse, opacity );
          float fresnel = pow(1.0 - max(dot(normalize(vNormal), normalize(vViewPosition)), 0.0), uFresnelPower);
          diffuseColor.rgb += uFresnelColor * fresnel * 0.35;
          `
        );
      };

      mesh.material = physicalMat;
      materialsRef.current.push(physicalMat);
    });

    onLoaded?.();
  }, [scene, onLoaded, isMobileDevice]);

  useEffect(() => {
    if (isMobileDevice) return;

    const updateScroll = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
      scrollRef.current.target = THREE.MathUtils.clamp(
        window.scrollY / maxScroll,
        0,
        1
      );
      invalidate();
    };

    const updatePointer = (event: PointerEvent) => {
      pointerRef.current.targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerRef.current.targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, [invalidate, isMobileDevice]);

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        if (entry.isIntersecting) invalidate();
      },
      { threshold: 0 }
    );

    observer.observe(canvas);
    return () => observer.disconnect();
  }, [invalidate]);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group || !isVisible.current) return;

    const dt = Math.min(delta, 0.1);
    elapsedRef.current += dt;
    const time = elapsedRef.current;

    if (studioLightRef.current) {
      studioLightRef.current.position.x = 4.0 + Math.sin(time * 0.3) * 1.2;
      studioLightRef.current.position.y = 5.0 + Math.cos(time * 0.4) * 1.2;
    }

    if (isMobileDevice) {
      const mobileFloatY = Math.sin(time * 1.0) * 0.06;
      const mobileFloatX = Math.cos(time * 0.7) * 0.03;

      group.position.x = 0.24 + mobileFloatX;
      group.position.y = 0.46 + mobileFloatY;
      group.position.z = -0.48;

      group.rotation.x = 0.2 + Math.sin(time * 0.3) * 0.04;
      group.rotation.y = -0.25 + time * 0.12;
      group.rotation.z = Math.cos(time * 0.2) * 0.02;

      group.scale.setScalar(0.2);
      return;
    }

    const prev = scrollRef.current.current;
    const scrollAlpha  = 1 - Math.pow(1 - 0.075, dt * 60);
    const pointerAlpha = 1 - Math.pow(1 - 0.055, dt * 60);
    const posAlpha     = 1 - Math.pow(1 - 0.075, dt * 60);
    const rotAlpha     = 1 - Math.pow(1 - 0.08,  dt * 60);

    scrollRef.current.current = THREE.MathUtils.lerp(
      prev,
      scrollRef.current.target,
      scrollAlpha
    );
    scrollRef.current.velocity = Math.abs(scrollRef.current.current - prev);

    pointerRef.current.x = THREE.MathUtils.lerp(
      pointerRef.current.x,
      pointerRef.current.targetX,
      pointerAlpha
    );
    pointerRef.current.y = THREE.MathUtils.lerp(
      pointerRef.current.y,
      pointerRef.current.targetY,
      pointerAlpha
    );

    const progress = scrollRef.current.current;
    const breath = Math.sin(time * 0.6) * 0.008 + Math.sin(time * 1.4) * 0.003;
    const velocityBoost = THREE.MathUtils.clamp(
      scrollRef.current.velocity * 6,
      0,
      0.12
    );

    let targetX = 1.42;
    let targetY = 0.08;
    let targetZ = -0.08;
    let targetRotY = -0.2;
    let targetRotX = 0.04;
    let baseScale = 0.36;

    if (progress < 0.18) {
      const p = progress / 0.18;
      targetX = THREE.MathUtils.lerp(1.42, 1.05, p);
      targetY = THREE.MathUtils.lerp(0.08, -0.02, p);
      targetZ = THREE.MathUtils.lerp(-0.08, -0.02, p);
      targetRotY = THREE.MathUtils.lerp(-0.18, -0.82, p);
      targetRotX = THREE.MathUtils.lerp(0.04, 0.12, p);
      baseScale = THREE.MathUtils.lerp(0.36, 0.33, p);
    } else if (progress < 0.44) {
      const p = (progress - 0.18) / 0.26;
      targetX = THREE.MathUtils.lerp(1.05, -0.82, p);
      targetY = THREE.MathUtils.lerp(-0.02, 0.14, p);
      targetZ = THREE.MathUtils.lerp(-0.02, -0.24, p);
      targetRotY = THREE.MathUtils.lerp(-0.82, -Math.PI * 1.05, p);
      targetRotX = THREE.MathUtils.lerp(0.12, -0.02, p);
      baseScale = THREE.MathUtils.lerp(0.33, 0.29, p);
    } else if (progress < 0.72) {
      const p = (progress - 0.44) / 0.28;
      targetX = THREE.MathUtils.lerp(-0.82, 0.9, p);
      targetY = THREE.MathUtils.lerp(0.14, -0.2, p);
      targetZ = THREE.MathUtils.lerp(-0.24, -0.34, p);
      targetRotY = THREE.MathUtils.lerp(-Math.PI * 1.05, -Math.PI * 1.75, p);
      targetRotX = THREE.MathUtils.lerp(-0.02, -0.2, p);
      baseScale = THREE.MathUtils.lerp(0.29, 0.31, p);
    } else {
      const p = (progress - 0.72) / 0.28;
      targetX = THREE.MathUtils.lerp(0.9, 0.62, p);
      targetY = THREE.MathUtils.lerp(-0.2, -0.48, p);
      targetZ = THREE.MathUtils.lerp(-0.34, -0.1, p);
      targetRotY = THREE.MathUtils.lerp(-Math.PI * 1.75, -Math.PI * 2.35, p);
      targetRotX = THREE.MathUtils.lerp(-0.2, 0.1, p);
      baseScale = THREE.MathUtils.lerp(0.31, 0.25, p);
    }

    const parallaxX = pointerRef.current.x * 0.12;
    const parallaxY = pointerRef.current.y * -0.12;

    group.position.x = THREE.MathUtils.lerp(group.position.x, targetX + parallaxX, posAlpha);
    group.position.y = THREE.MathUtils.lerp(group.position.y, targetY + parallaxY, posAlpha);
    group.position.z = THREE.MathUtils.lerp(group.position.z, targetZ, posAlpha);
    
    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      targetRotY + pointerRef.current.x * 0.15 + Math.sin(time * 0.15) * 0.03,
      rotAlpha
    );
    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      targetRotX - pointerRef.current.y * 0.12 + Math.cos(time * 0.18) * 0.02,
      rotAlpha
    );
    group.rotation.z = THREE.MathUtils.lerp(
      group.rotation.z,
      pointerRef.current.x * -0.03 + Math.sin(time * 0.25) * 0.012,
      rotAlpha
    );
    group.scale.setScalar(baseScale + breath + velocityBoost * 0.3);
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

export default function BrainCanvas(): React.JSX.Element {
  const [loaded, setLoaded] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const studioLightRef = useRef<THREE.DirectionalLight>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dpr: [number, number] = isMobileDevice ? [1, 1] : [1, 1.5];

  return (
    <div
      className="fixed inset-0 h-screen w-screen pointer-events-none select-none"
      style={{
        zIndex: 0,
        opacity: loaded ? 0.85 : 1,
        transition: "opacity 0.8s ease",
      }}
    >
      {!loaded && <LoadingFallback />}
      <Canvas
        frameloop="always"
        camera={{ position: [0, 0, 4.8], fov: 36 }}
        dpr={dpr}
        gl={{
          alpha: true,
          antialias: !isMobileDevice,
          powerPreference: "high-performance",
          depth: true,
          stencil: false,
        }}
        shadows={false}
      >
        <ambientLight intensity={isMobileDevice ? 1.8 : 1.4} />
        <directionalLight ref={studioLightRef} position={[4, 5, 4]} intensity={isMobileDevice ? 1.6 : 2.5} color="#ffffff" />
        {!isMobileDevice && (
          <>
            <directionalLight position={[-5, 2, 2]} intensity={1.2} color="#f8fafc" />
            <directionalLight position={[0, -4, 3]} intensity={0.6} color="#e2e8f0" />
            <FloatingParticles count={40} />
          </>
        )}
        <Suspense fallback={null}>
          <BrainModel isMobileDevice={isMobileDevice} onLoaded={() => setLoaded(true)} studioLightRef={studioLightRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}

if (typeof window !== "undefined") {
  setTimeout(() => useGLTF.preload("/models/brainmodel.glb"), 300);
}