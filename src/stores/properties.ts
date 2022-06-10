import create from "zustand";
import { Euler, Vector3 } from "@react-three/fiber";

export interface Property {
  id: string;
  url: string;
  position?: Vector3;
  rotation?: Euler;
  scale?: Vector3;
}

interface PropertyStore {
  properties: Property[];
  addProperty: (property: Property) => void;
  updateProperty: (property: Property) => void;
  removeProperty: (id: string) => void;
}

export const usePropertyStore = create<PropertyStore>((set) => ({
  properties: [
    {
      id: "1",
      url: "https://gltfheadstone.s3.amazonaws.com/3d/Number+20.gltf",
      position: [10, -10, 20],
      scale: [20, 20, 20],
      rotation: [0, 0, 0],
    },
    {
      id: "2",
      url: "https://gltfheadstone.s3.amazonaws.com/3d/Frame+80+x+70+x+10.gltf",
      position: [10, -10, 20],
      scale: [20, 20, 20],
      rotation: [0, 0, 0],
    },
    {
      id: "3",
      url: "https://gltfheadstone.s3.amazonaws.com/3d/Pebbles_white_80+x+40.gltf",
      position: [10, -10, 20],
      scale: [20, 20, 20],
      rotation: [0, 0, 0],
    },
  ],
  addProperty: (property) =>
    set((state) => ({
      properties: [...state.properties, property],
    })),
  updateProperty: (newProperty) =>
    set((state) => ({
      properties: state.properties.reduce((arr, property) => {
        return newProperty.id === property.id
          ? [...arr, newProperty]
          : [...arr, property];
      }, []),
    })),
  removeProperty: (id) =>
    set((state) => ({
      properties: state.properties.filter((property) => property.id !== id),
    })),
}));
