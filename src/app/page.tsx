import Link from "next/link";
import { api } from "~/trpc/server";

export default async function Home() {
  const data = await api.vehicle.getAll.query();

  return (
    <main className="max-w-screen-xl px-4 md:px-8">
      <div className="column flex  flex-col items-start gap-8">
        <div className="items-start justify-between md:flex">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
              Vehicles
            </h3>
            <p className="mt-2 text-gray-600">List of available vehicles</p>
          </div>
        </div>
        <ul className="flex  gap-4">
          {data.map((vehicle) => (
            <li key={vehicle.id}>
              <Link
                className={`flex items-center gap-2 border ${getColors(
                  vehicle.vehicleOrder[0]?.variant,
                )} px-5 hover:bg-gray-50`}
                href={`/vehicle/${vehicle.name}`}
              >
                <img
                  src={vehicle.img}
                  alt={vehicle.name}
                  className="h-24 w-24 rounded-md object-contain"
                />
                <span className="flex flex-col ">
                  {vehicle.name}
                  <span className="text-xs text-gray-500">{vehicle.model}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

const getColors = (status?: string) => {
  if (!status) return "";

  if (status === "warning") {
    return ["border-yellow-300", "bg-yellow-50", "text-yellow-800"].join(" ");
  }
  if (status === "error") {
    return ["border-red-300", "bg-red-50", "text-red-800"].join(" ");
  }

  return ["border-green-300", "bg-green-50", "text-green-800"].join(" ");
};
