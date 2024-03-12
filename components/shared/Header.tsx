import Link from "next/link";
import { logoFont, sans } from "../fonts";

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-2 sm:p-16 sm:justify-center">
      <h1 className={`${logoFont.className} text-center text-accent text-3xl`}>
        Carmart.
      </h1>
      <div
        className={`${sans.className} flex items-center w-3/4 justify-end text-lg space-x-4 sm:justify-end sm:space-x-16`}
      >
        <Link
          className="hover:border-b-2 hover:border-accent duration-75 "
          href={"/"}
        >
          All Vehicles
        </Link>
        <Link
          className="hover:border-b-2 hover:border-accent duration-75"
          href={"/"}
        >
          About
        </Link>
      </div>
    </div>
  );
};
