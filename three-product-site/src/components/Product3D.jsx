import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/product.glb");
  return <primitive object={scene} scale={2} />;
}

export default function Product3D() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <Environment preset="studio" />
        <Model />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
