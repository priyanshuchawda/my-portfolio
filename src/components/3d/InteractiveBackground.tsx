import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { inSphere } from 'maath/random';
import { useTheme } from '../../context/ThemeContext';
import { useThree as useThreeContext } from '../../context/ThreeContext';

function Particles({ count = 1000 }) {
  const { darkMode } = useTheme();
  const threeContext = useThreeContext();
  
  const points = useRef<THREE.Points>(null!);
  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const colors = useMemo(() => new Float32Array(count * 3), [count]);

  useEffect(() => {
    if (points.current) {
      inSphere(positions, { radius: 20 });
      const color = new THREE.Color(darkMode ? 0x666666 : 0x333333);
      for (let i = 0; i < count; i++) {
        color.toArray(colors, i * 3);
      }
      points.current.geometry.attributes.position.needsUpdate = true;
      points.current.geometry.attributes.color.needsUpdate = true;
    }
  }, [darkMode, positions, colors, count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particleMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.05,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
    });
  }, []);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <primitive object={particleMaterial} />
    </points>
  );
}

export default function InteractiveBackground() {
  const { darkMode } = useTheme();

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: darkMode ? '#111827' : '#ffffff' }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
