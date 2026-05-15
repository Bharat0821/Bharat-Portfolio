import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, OrbitControls, Stars, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Animated distorted icosahedron — main centerpiece
const DistortedSphere = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#7c3aed"
          distort={0.45}
          speed={2.5}
          roughness={0}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
};

// Outer wireframe ring
const WireframeRing = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={3.2}>
      <torusGeometry args={[1, 0.015, 16, 120]} />
      <meshStandardMaterial color="#a855f7" wireframe={false} opacity={0.4} transparent />
    </mesh>
  );
};

// Second ring at different angle
const WireframeRing2 = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.25;
      meshRef.current.rotation.x = Math.PI / 3;
    }
  });

  return (
    <mesh ref={meshRef} scale={3.8}>
      <torusGeometry args={[1, 0.01, 16, 120]} />
      <meshStandardMaterial color="#ec4899" opacity={0.25} transparent />
    </mesh>
  );
};

// Floating particle field
const Particles = () => {
  const count = 180;
  const meshRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.04;
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#c084fc"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
};

// Mouse-reactive camera rig
const CameraRig = () => {
  const { camera, gl } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useMemo(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    gl.domElement.addEventListener("mousemove", onMove);
    return () => gl.domElement.removeEventListener("mousemove", onMove);
  }, [gl]);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 1.2 - camera.position.x) * 0.05;
    camera.position.y += (mouse.current.y * 0.8 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

// Animated text characters
const titleChars = "CREATIVE".split("");
const subtitleChars = "DEVELOPER".split("");

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen relative flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#a855f7" />
          <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#ec4899" />
          <pointLight position={[0, 0, 3]} intensity={2} color="#7c3aed" />

          <Stars
            radius={60}
            depth={50}
            count={3000}
            factor={3}
            saturation={0.5}
            fade
            speed={0.5}
          />

          <DistortedSphere />
          <WireframeRing />
          <WireframeRing2 />
          <Particles />
          <CameraRig />
        </Canvas>
      </div>

      {/* Gradient overlay so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      {/* Text */}
      <div className="relative z-10 text-center select-none">

        {/* CREATIVE — letter by letter */}
        <div className="flex justify-center overflow-hidden">
          {titleChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-7xl md:text-9xl font-black leading-none text-white"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* DEVELOPER — letter by letter with gradient */}
        <div className="flex justify-center overflow-hidden mt-2">
          {subtitleChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
          className="text-zinc-400 text-lg mt-6 tracking-widest uppercase"
        >
          React · GSAP · Framer Motion · Three.js
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-zinc-500 text-xs tracking-[4px] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-purple-400 to-transparent"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;