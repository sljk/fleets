import { ThreeElements } from "@react-three/fiber";
import { useRef } from "react";

export const Wall = () => {
  const mesh = useRef<ThreeElements["mesh"]>();

  return (
    <mesh position={[-2.2, 0.5, 0]} ref={mesh}>
      <boxGeometry args={[0.3, 6, 0.2]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};
