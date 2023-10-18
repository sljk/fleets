import { ThreeElements } from "@react-three/fiber";
import { useRef } from "react";

export const Car = () => {
  const mesh = useRef<ThreeElements["mesh"]>();

  return (
    <mesh position={[0.1, 1, 0]} ref={mesh}>
      <boxGeometry args={[0.3, 0.5, 0.1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};
