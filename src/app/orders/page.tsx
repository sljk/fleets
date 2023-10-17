import { api } from "~/trpc/server";
import { OrderTable } from "../_features/orders/OrderTable";

export default async function Orders() {
  const data = await api.vehicleOrder.getAll.query();

  return <OrderTable data={data ?? []} />;
}
