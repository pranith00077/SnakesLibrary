
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Center,
  Environment
} from "@react-three/drei";

function Model({ path }) {
  const { scene } = useGLTF(path);

  return (
    <Center>
      <primitive object={scene} scale={1.5} />
    </Center>
  );
}

export default function SnakeViewer({ model }) {
  return (
    <div className="snake-viewer">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Suspense fallback={null}>
          <Model path={model} />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enablePan={false}
          minDistance={2}
          maxDistance={10}
        />
      </Canvas>

      <div className="viewer-label">
        DRAG TO ROTATE · SCROLL TO ZOOM
      </div>
    </div>
  );
}
