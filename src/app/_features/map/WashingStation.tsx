type Props = {
  position: [number, number, number];
};

export const WashingStation = ({ position }: Props) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 0.01]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};
