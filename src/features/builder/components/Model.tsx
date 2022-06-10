import { useState, useRef } from "react";
import { useFrame } from '@react-three/fiber'
import { useCursor, useGLTF } from '@react-three/drei';
import { useModelStore } from '../../../stores/models';
import { usePropertyStore, Property } from '../../../stores/properties';

const modes = ["translate", "rotate", "scale"];

const Model = ({ property }: {property: Property}) => {
    const { mode, setMode, setTarget } = useModelStore();
    const { updateProperty } = usePropertyStore();
    const { scene }: any = useGLTF(property.url);
    const [hovered, setHovered] = useState(false);
    const model = useRef(null);

    useFrame(() => {
      updateProperty({
        ...property,
        position: model.current.position,
        rotation: model.current.rotation,
        scale: model.current.scale
      })
    })
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
          ref={model}
          onClick={handleClick}
          onContextMenu={handleContext}
          onPointerMissed={(e: any) =>
            e.type === "click" && (setTarget(null), setMode(0))
          }
          onPointerOver={(e: any) => {e.stopPropagation(); setHovered(true)}}
          position={property.position}
          rotation={property.rotation}
          scale={property.scale}
        />
      </group>
    );
};

export default Model;