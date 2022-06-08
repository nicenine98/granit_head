import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, Environment } from "@react-three/drei";
import Model from './Model';
import Controls from "./Controls";
import model1 from "../../../assets/3d/Number 3 (Big).gltf";
import model2 from "../../../assets/3d/Lantern 1.gltf";
import model3 from '../../../assets/3d/number 14.gltf';

const ImageTool = ({
  env = "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr",
}) => {
  const list = [
    {
      url: model1,
    },
    {
      url: model2,
    },
  ];

  return (
    <Canvas camera={{ position: [30, -10, 80], fov: 50 }} dpr={[1, 2]}>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        {list.map(({ url }, i) => {
          return (
            <Model url={url} key={i} position={[1, -20, -20]} scale={40} />
          );
        })}
      </Suspense>
      <Controls />
    </Canvas>
  );
};

export default ImageTool;
