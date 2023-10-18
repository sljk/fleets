"use client";

import { Canvas } from "@react-three/fiber";
import { Car } from "./Car";
import { ChargingStation } from "./ChargingStation";
import { Wall } from "./Wall";
import { ParkingSpot } from "./ParkingSpot";
import { WashingStation } from "./WashingStation";

export const MapCanvas = () => {
  return (
    <div style={{ width: 700, height: 700 }} className=" bg-gray-200">
      <Canvas>
        <ambientLight intensity={0.9} />
        <ChargingStation position={[-0.1, 3, 0]} />
        <ChargingStation position={[-0.8, 3, 0]} />
        <ChargingStation position={[-1.5, 3, 0]} />
        <ChargingStation position={[-1.5, 3, 0]} />
        <ParkingSpot position={[3, 1.8, 0]} />
        <ParkingSpot position={[3, 1.2, 0]} />
        <ParkingSpot position={[3, 0.6, 0]} />
        <ParkingSpot position={[3, 0, 0]} />
        <ParkingSpot position={[3, -0.6, 0]} />
        <WashingStation position={[-3.1, 3, 0]} />
        <Car />
        <Wall />
      </Canvas>
    </div>
  );
};
