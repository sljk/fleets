"use client";

import { Canvas } from "@react-three/fiber";
import { Car } from "./Car";
import { ChargingStation } from "./ChargingStation";
import { Wall } from "./Wall";
import { ParkingSpot } from "./ParkingSpot";
import { WashingStation } from "./WashingStation";
import { useState } from "react";
import { car1positions, car2positions } from "./mockPosition";

export const MapCanvas = () => {
  const [car1positionIndex, setCar1positionIndex] = useState<number>(0);
  const [car2positionIndex, setCar2positionIndex] = useState<number>(0);

  const pushCar1 = () => {
    setCar1positionIndex((car1positionIndex + 1) % car1positions.length);
  };

  const pushCar2 = () => {
    setCar2positionIndex((car2positionIndex + 1) % car2positions.length);
  };

  return (
    <>
      <button
        className="rounded-lg border px-3 py-1.5 text-sm text-gray-700 duration-100 hover:border-indigo-600 active:shadow-lg"
        onClick={pushCar1}
      >
        Car 1 GPS position update
      </button>
      <button
        className="rounded-lg border px-3 py-1.5 text-sm text-gray-700 duration-100 hover:border-indigo-600 active:shadow-lg"
        onClick={pushCar2}
      >
        Car 2 GPS position update
      </button>
      <div style={{ width: 700, height: 600 }} className=" bg-gray-200">
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

          <Car
            color="blue"
            mockPositions={car1positions}
            positionIndex={car1positionIndex}
          />
          {/* {/* <Car color="red" position={[2, 1, 0]} rotation={[0, 0, 0]} /> */}
          <Car
            color="pink"
            mockPositions={car2positions}
            positionIndex={car2positionIndex}
          />

          <Wall />
        </Canvas>
      </div>
    </>
  );
};
