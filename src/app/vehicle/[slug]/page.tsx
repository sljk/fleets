import { StatusAlert } from "~/app/_features/vehicle/StatusAlert";
import { api } from "~/trpc/server";

export default async function Vehicle({
  params,
}: {
  params: { slug: string };
}) {
  const data = await api.vehicle.vehicleDetails.query({ name: params.slug });

  console.log("AAA", data);
  return (
    <div className="max-w-screen-xl px-4 md:px-8">
      <div className="column flex  flex-col items-start gap-8">
        <div className="items-start justify-between md:flex">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
              Vehicle {params.slug}
            </h2>
            <p className="mt-2 text-gray-500">{data?.model}</p>
          </div>
        </div>
        <img
          src={data?.img}
          alt={data?.name}
          className="h-48 w-48 rounded-md object-contain"
        />
        <h3 className="text-xl font-bold text-gray-600">Status</h3>
        <ul className="flex flex-col gap-4">
          {data?.vehicleStatus.map((status) => (
            <StatusAlert key={status.id} status={status} />
          ))}
        </ul>
      </div>
    </div>
  );
}
