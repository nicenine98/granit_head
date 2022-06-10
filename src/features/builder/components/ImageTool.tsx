import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, Environment, Loader } from "@react-three/drei";
import Model from "./Model";
import Controls from "./Controls";
import ImageDrawer from "./ImageDrawer";
import { usePropertyStore } from "../../../stores/properties";

const ImageTool = () => {
  const { properties } = usePropertyStore();

  return (
    <div className="h-full">
      <ImageDrawer />
      <Canvas camera={{ position: [30, -10, 80], fov: 50 }} dpr={[1, 2]}>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          {properties.map((property) => {
            return <Model key={property.id} property={property} />;
          })}
        </Suspense>
        <Controls />
      </Canvas>
      <Loader containerStyles={{ background: "gray" }} />
    </div>
  );
};

export default ImageTool;
