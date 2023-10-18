import { ThreeElements } from "@react-three/fiber";
import { useRef } from "react";
import { useSpring, animated } from "@react-spring/three";

type Props = {
  mockPositions: [number, number, number, number, number, number][];
  positionIndex: number;
  color: string;
};

export const Car = ({ mockPositions, positionIndex, color }: Props) => {
  const mesh = useRef<ThreeElements["mesh"]>();

  const [x, y, z, rotx, roty, rotz] = mockPositions[positionIndex] as [
    number,
    number,
    number,
    number,
    number,
    number,
  ];

  const { springyPosition, springyRotation } = useSpring({
    springyPosition: [x, y, z],
    springyRotation: [rotx, roty, rotz],
  });

  return (
    /* @ts-ignore: https://github.com/pmndrs/react-spring/issues/1515 */
    <animated.mesh
      position={springyPosition}
      rotation={springyRotation}
      ref={mesh}
    >
      <boxGeometry args={[0.3, 0.5, 0.1]} />
      <meshStandardMaterial color={color} />
    </animated.mesh>
  );
};
