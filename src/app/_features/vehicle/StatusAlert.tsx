import { VehicleStatus } from "@prisma/client";
import { StatusIcon } from "./StatusIcon";

export const StatusAlert = ({ status }: { status: VehicleStatus }) => {
  const { borderColor, backgroundColor, text } = getColors(status.variant);

  return (
    <li>
      <div className="max-w-5xl">
        <div
          className={`flex justify-between rounded-md border ${borderColor} ${backgroundColor} p-4`}
        >
          <div className="flex gap-3">
            <div>
              <StatusIcon variant={status.variant} className="h-6 w-6" />
            </div>
            <div className="self-center">
              <span className={`font-medium ${text}`}>{status.title}</span>
              <div>
                <p className={`mt-1 sm:text-sm ${text}`}>{status.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const getColors = (status: string) => {
  if (status === "warning") {
    return {
      borderColor: "border-yellow-300",
      backgroundColor: "bg-yellow-50",
      text: "text-yellow-800",
    };
  }
  if (status === "error") {
    return {
      borderColor: "border-red-300",
      backgroundColor: "bg-red-50",
      text: "text-red-800",
    };
  }

  return {
    borderColor: "border-green-300",
    backgroundColor: "bg-green-50",
    text: "text-green-800",
  };
};
