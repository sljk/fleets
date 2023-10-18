type Props = {
  position: [number, number, number];
};

export const ParkingSpot = ({ position }: Props) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.7, 0.5, 0.01]} />
      <meshStandardMaterial color="#CCCCCC" />
    </mesh>
  );
};
