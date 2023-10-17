import { api } from "~/trpc/server";
import { OrderTable } from "../_features/orders/OrderTable";

export default async function Orders() {
  const data = await api.vehicleOrder.getAll.query();

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="column flex  flex-col items-start gap-8">
        <div className="items-start justify-between md:flex">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
              Vehicle orders
            </h3>
            <p className="mt-2 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <OrderTable data={data ?? []} />
      </div>
    </div>
  );
}
