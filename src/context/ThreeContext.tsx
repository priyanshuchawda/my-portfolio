import { createContext, useContext, ReactNode, useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeContextType {
  renderer: THREE.WebGLRenderer | null;
  scene: THREE.Scene | null;
}

const ThreeContext = createContext<ThreeContextType>({
  renderer: null,
  scene: null,
});

export function useThree() {
  return useContext(ThreeContext);
}
 
export function ThreeProvider({ children }: { children: ReactNode }) {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    if (!rendererRef.current) {
      rendererRef.current = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      
      // Safely set pixel ratio, fallback to 1 if window is undefined
      const pixelRatio = typeof window !== 'undefined' 
        ? Math.min(window.devicePixelRatio || 1, 2) 
        : 1;
      
      rendererRef.current.setPixelRatio(pixelRatio);
    }

    if (!sceneRef.current) {
      sceneRef.current = new THREE.Scene();
    }

    return () => {
      // Cleanup renderer if needed
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
      if (sceneRef.current) {
        sceneRef.current = null;
      }
    };
  }, []);

  return (
    <ThreeContext.Provider
      value={{
        renderer: rendererRef.current,
        scene: sceneRef.current,
      }}
    >
      {children}
    </ThreeContext.Provider>
  );
}
