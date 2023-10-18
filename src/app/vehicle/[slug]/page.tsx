import { MapCanvas } from "~/app/_features/map/MapCanvas";
import { OrderItem } from "~/app/_features/vehicle/OrderItem";
import { StatusAlert } from "~/app/_features/vehicle/StatusAlert";
import { api } from "~/trpc/server";

export default async function Vehicle({
  params,
}: {
  params: { slug: string };
}) {
  const data = await api.vehicle.vehicleDetails.query({ name: params.slug });

  return (
    <div className="px-4 md:px-8">
      <div className="flex flex-col">
        <h2 className="vehicle-title text-xl font-bold text-gray-800 sm:text-2xl">
          Vehicle {params.slug}
        </h2>
        <p className="mt-2 text-gray-500">{data?.model}</p>
      </div>
      <div className="flex justify-between gap-4">
        <div className="column flex flex-1 flex-col items-center gap-8">
          <div className="items-start justify-between md:flex"></div>
          <img
            src={data?.img}
            alt={data?.name}
            className="h-64 w-64 rounded-md object-contain"
          />
          <div className="flex justify-between gap-12 self-stretch">
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-600">Status</h3>
              <ul className="flex flex-col gap-4">
                {data?.vehicleStatus.map((status) => (
                  <StatusAlert key={status.id} status={status} />
                ))}
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-600">Orders</h3>
              <ul className="flex flex-col gap-4">
                {data?.vehicleOrder.map((order) => (
                  <OrderItem order={order} key={order.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start gap-2">
          <MapCanvas />
        </div>
      </div>
    </div>
  );
}
