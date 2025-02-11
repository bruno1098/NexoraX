import { Canvas } from '@react-three/fiber';
import { Stars, Cloud, Float } from '@react-three/drei';

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Float
          speed={1.5}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <Cloud
            opacity={0.5}
            speed={0.4}
            width={10}
            depth={1.5}
            segments={20}
          />
        </Float>
      </Canvas>
    </div>
  );
} 