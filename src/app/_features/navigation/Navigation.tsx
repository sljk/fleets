"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="md:text-sm` bg-white pb-5">
      <div className="mx-auto max-w-screen-xl items-center gap-x-14 px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a>
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <div className="md:hidden">
            <button className="menu-btn text-gray-500 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-8 block flex-1 items-center md:mt-0 md:flex">
          <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            <li className="text-gray-400 hover:text-gray-900">
              <Link
                href="/"
                className={`block ${pathname === "/" ? "text-gray-700" : ""}`}
              >
                Vehicles
              </Link>
            </li>
            <li className="text-gray-400 hover:text-gray-900">
              <Link
                href="/orders"
                className={`block ${
                  pathname === "/orders" ? "text-gray-700" : ""
                }`}
              >
                Orders
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
