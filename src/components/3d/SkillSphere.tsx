import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export interface SkillSphereProps {
  skills: string[];
  className?: string;
}

export const SkillSphere: React.FC<SkillSphereProps> = ({ skills, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; 

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create text sprites for skills
    const sprites: THREE.Sprite[] = [];
    const radius = 200;

    skills.forEach((skill, index) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) return;

      canvas.width = 256;
      canvas.height = 64;

      context.font = '32px Arial';
      context.fillStyle = theme === 'dark' ? '#ffffff' : '#000000';
      context.textAlign = 'center';
      context.fillText(skill, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(spriteMaterial);

      // Position on sphere
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;

      sprite.position.setFromSphericalCoords(radius, phi, theta);
      sprite.scale.set(50, 12.5, 1);

      scene.add(sprite);
      sprites.push(sprite);
    });

    camera.position.z = 400;

    // Animation
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      sprites.forEach((sprite) => {
        sprite.lookAt(camera.position);
      });
      scene.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      sprites.forEach((sprite) => {
        sprite.material.map?.dispose();
        sprite.material.dispose();
      });
      renderer.dispose();
    };
  }, [skills, theme]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className || ''}`}
      aria-hidden="true"
    />
  );
};
