"use client";

import { Vehicle, VehicleOrder } from "@prisma/client";
import { useState } from "react";

type Props = {
  data: (VehicleOrder & { vehicle: null | Vehicle })[];
};

type SortKeys = "vehicle" | "createdAt" | "status" | null;

export const OrderTable = ({ data }: Props) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortKey, setSortKey] = useState<SortKeys>("createdAt");

  const changeSort = (key: SortKeys) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredData = data
    .filter((item) => {
      if (!filter) {
        return true;
      }

      return [item.vehicle?.name, item.vehicle?.model, item.status].some(
        (str) => str?.toLowerCase().includes(filter.toLowerCase()),
      );
    })
    .sort((a, b) => {
      if (!sortKey) return 0;

      const aVal = {
        vehicle: a.vehicle?.name,
        createdAt: a.createdAt,
        status: a.status,
      }[sortKey];

      const bVal = {
        vehicle: b.vehicle?.name,
        createdAt: b.createdAt,
        status: b.status,
      }[sortKey];

      if (aVal === undefined || bVal === undefined) return 0;

      const res = aVal > bVal;

      if (sortOrder === "asc") {
        return res ? 1 : -1;
      } else {
        return res ? -1 : 1;
      }
    });

  return (
    <>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={filter ?? ""}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded-md border bg-gray-50 py-3 pl-12 pr-4 text-gray-500 outline-none focus:border-indigo-600 focus:bg-white"
        />
      </div>
      <div className="flex-1 self-stretch overflow-x-auto rounded-lg border shadow-sm">
        <table className="w-full table-auto text-left text-sm">
          <thead className="border-b bg-gray-50 font-medium text-gray-600">
            <tr>
              <th
                className="cursor-pointer px-6 py-3"
                onClick={() => changeSort("vehicle")}
              >
                Vehicle
              </th>
              <th
                className="cursor-pointer px-6 py-3"
                onClick={() => changeSort("status")}
              >
                Status
              </th>
              <th
                className="cursor-pointer px-6 py-3"
                onClick={() => changeSort("createdAt")}
              >
                Start time
              </th>
              <th className="px-6 py-3">Progress</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-600">
            {filteredData.map((item, idx) => (
              <tr key={idx}>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex flex-col">
                    {item.vehicle?.name}
                    <span className="text-xs text-gray-400">
                      {item.vehicle?.model}
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">{item.status}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.createdAt.toUTCString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.completedJobs} / {item.jobCount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
