import { useModelStore } from '../../../stores/models';
import { OrbitControls, TransformControls } from "@react-three/drei";

const Controls = () => {
    const modes = ["translate", "rotate", "scale"];

    const { target, mode } = useModelStore();
    return (
      <>
        {target && <TransformControls object={target} mode={modes[mode]} />}
        <OrbitControls
          makeDefault
          rotateSpeed={2}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.5}
        />
      </>
    );
  }

export default Controls