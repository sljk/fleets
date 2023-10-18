import { Car } from "./Car";

export const Cars = () => {
  return (
    <>
      <Car color="blue" position={[2, 0, 0]} rotation={[0, 0, 0]} />
      <Car color="red" position={[2, 1, 0]} rotation={[0, 0, 0]} />
      <Car color="pink" position={[2, 2, 0]} rotation={[0, 0, 0]} />
    </>
  );
};
