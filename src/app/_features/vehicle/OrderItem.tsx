import { VehicleOrder } from "@prisma/client";
import { ParkingCircle, ShowerHead, PlugZap } from "lucide-react";

type Props = {
  order: VehicleOrder;
};

export const OrderItem = ({ order }: Props) => {
  const { borderColor, backgroundColor, text } = getColors(order.status);

  return (
    <li>
      <div className="max-w-5xl">
        <div
          className={`flex justify-between rounded-md border ${borderColor} ${backgroundColor} p-4`}
        >
          <div className="flex gap-3">
            <OrderIcon title={order.title} className={text} />
            <div className="self-center">
              <span className={`flex items-center gap-2 font-medium ${text}`}>
                {order.title}
                <span className={`text-xs ${text}`}>[{order.status}]</span>
              </span>
              <div>
                <p className={`mt-1 text-sm ${text}`}>{order.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const OrderIcon = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  if (title === "Parking") return <ParkingCircle className={className} />;

  if (title === "Washing") return <ShowerHead className={className} />;

  return <PlugZap className={className} />;
};

const getColors = (status: string) => {
  if (status === "completed") {
    return {
      borderColor: "border-green-300",
      backgroundColor: "bg-green-50",
      text: "text-green-800",
    };
  }

  if (status === "in progress") {
    return {
      borderColor: "border-yellow-300",
      backgroundColor: "bg-yellow-50",
      text: "text-yellow-800",
    };
  }

  if (status === "stopped") {
    return {
      borderColor: "border-red-300",
      backgroundColor: "bg-red-50",
      text: "text-red-800",
    };
  }

  return {
    borderColor: "border-gray-300",
    backgroundColor: "bg-gray-50",
    text: "text-gray-800",
  };
};
