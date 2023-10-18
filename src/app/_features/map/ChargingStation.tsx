type Props = {
  position: [number, number, number];
};

export const ChargingStation = ({ position }: Props) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.5, 0.7, 0.01]} />
      <boxGeometry args={[0.5, 0.7, 0.01]} />
      <meshStandardMaterial color="#E3C730" />
    </mesh>
  );
};
