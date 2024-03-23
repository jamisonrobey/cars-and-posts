import Link from "next/link";
import { logoFont, sans } from "../../lib/fonts";

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-2 sm:p-16 z-10 sm:justify-center  mb-16">
      <Link
        href="/"
        className={`${logoFont.className} text-center text-accent text-3xl sm:text-6xl`}
      >
        Carmart.
      </Link>
      <div
        className={`${sans.className} flex items-center w-3/4 justify-end text-lg sm:text-2xl space-x-4 sm:justify-end sm:space-x-16`}
      >
        <Link
          className="hover:border-b-4 hover:border-accent duration-75 "
          href={"/search/all"}
        >
          All Vehicles
        </Link>
        <Link
          className="hover:border-b-4 hover:border-accent duration-75"
          href={"/"}
        >
          About
        </Link>
      </div>
    </div>
  );
};
