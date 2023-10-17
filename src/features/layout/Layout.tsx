import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

type Props = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: Props) => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  return (
    <>
      <nav
        className={`${inter.className} bg-white pb-5 md:text-sm ${
          state
            ? "mx-2 mt-2 rounded-xl border shadow-lg md:mx-2 md:mt-0 md:border-none md:shadow-none"
            : ""
        }`}
      >
        <div className="mx-auto max-w-screen-xl items-center gap-x-14 px-4 md:flex md:px-8">
          <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#E9577A"
                  d="m430.121 76.219-4.281 20.559c-.195 8.434-7.047 15.223-15.516 15.223-8.594 0-15.578-6.961-15.578-15.555 0-1.512.273-2.965.68-4.344l4.5-21.488C404.332 49.512 393.684 32 376.012 32H96c-17.664 0-32 17.512-32 38.613v381.942C64 467.727 76.273 480 91.445 480c7.695 0 14.539-3.281 19.523-8.398l82.289-99.18C204.953 359.891 221.516 352 240.004 352h75.094c14.312 0 28.352-11.695 31.438-26.414l17.531-83.742c.062-.621.195-1.223.195-1.844 0-8.844-7.18-16-16-16H208c-8.844 0-16-7.156-16-16s7.156-16 16-16h139.004c26.508 0 48 21.488 48 48 0 3.082-.297 6.129-.875 9.039l-16.992 81.547C370.895 360.516 342.871 384 314.301 384h-72.805c-9.426 0-17.848 4.148-23.699 10.648l-80.547 96.656C126.234 503.953 110.062 512 92.008 512 58.859 512 32 485.141 32 451.992V76.219C32 34.852 60.648 0 96 0h286.004c35.336 0 56.726 34.852 48.117 76.219zm-46.117 75.769c0-8.824 7.156-15.996 16-15.996s16 7.172 16 15.996c0 8.848-7.156 16.004-16 16.004s-16-7.156-16-16.004z"
                />
              </svg>
            </a>
            <div className="md:hidden">
              <button
                className="menu-btn text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
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
                )}
              </button>
            </div>
          </div>
          <div
            className={`mt-8 flex-1 items-center md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-700 hover:text-gray-900">
                <a href="/" className="block">
                  Vehicles
                </a>
              </li>
              <li className="text-gray-700 hover:text-gray-900">
                <a href="/orders" className="block">
                  Orders
                </a>
              </li>
            </ul>
            <div className="mt-6 flex-1 items-center justify-end gap-x-6 space-y-6 md:mt-0 md:flex md:space-y-0">
              <a
                href="javascript:void(0)"
                className="block text-gray-700 hover:text-gray-900"
              >
                Log in
              </a>
              <a
                href="javascript:void(0)"
                className="flex items-center justify-center gap-x-1 rounded-full bg-gray-800 px-4 py-2 font-medium text-white hover:bg-gray-700 active:bg-gray-900 md:inline-flex"
              >
                Sign in
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};
