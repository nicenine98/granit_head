import { useState } from "react";
import { useCursor, useGLTF } from '@react-three/drei';
import { useModelStore } from '../../../stores/models';

interface ModelProps {
    url: string;
    position?: [x: number, y: number, z: number];
    rotation?: [x: number, y: number, z: number];
    scale?: number;
}

const modes = ["translate", "rotate", "scale"];

const Model = (props: ModelProps) => {
    const { mode, setMode, setTarget } = useModelStore();
    const { scene }: any = useGLTF(props.url);
    const [hovered, setHovered] = useState(false);
    useCursor(hovered);
  
    const handleClick = (e: any) => {
      e.stopPropagation();
      setTarget(e.eventObject);
    };
  
    const handleContext = (e: any) => {
      e.stopPropagation();
      setMode((mode + 1) % modes.length);
    };
  
    return (
      <group>
        <primitive
          object={scene}
          onClick={handleClick}
          onContextMenu={handleContext}
          onPointerMissed={(e: any) =>
            e.type === "click" && (setTarget(null), setMode(0))
          }
          onPointerOver={(e: any) => (e.stopPropagation(), setHovered(true))}
          scale={20}
        />
      </group>
    );
};

export default Model;