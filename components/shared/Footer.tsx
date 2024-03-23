import { boldSans, sans } from "@/lib/fonts";
import Link from "next/link";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full flex items-start justify-evenly mt-16">
      <div className="flex flex-col ">
        <p className={`${boldSans.className}`}>Contact</p>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-4`}
        >
          Report an issue
        </Link>
      </div>
      <div className="flex flex-col ">
        <p className={`${boldSans.className}`}>Body</p>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-4`}
        >
          Sedan
        </Link>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-1`}
        >
          Hatch
        </Link>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-1`}
        >
          Van
        </Link>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-1`}
        >
          Ute
        </Link>
      </div>
      <div className="flex flex-col ">
        <p className={`${boldSans.className}`}>Make</p>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-4`}
        >
          Toyota
        </Link>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-1`}
        >
          Kia
        </Link>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-1`}
        >
          Ford
        </Link>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-1`}
        >
          Volkswagen
        </Link>
      </div>

      <div className="flex flex-col ">
        <p className={`${boldSans.className}`}>Jamison Robey</p>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-4`}
        >
          Source code
        </Link>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-1`}
        >
          Blog post
        </Link>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-1`}
        >
          Blog
        </Link>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-1`}
        >
          Github
        </Link>
        <Link
          href="/"
          className={`${sans.className} text-gray-500 hover:underline mt-1`}
        >
          LinkedIn
        </Link>
        <p className={`${sans.className} text-gray-500 mt-16`}>{currentYear}</p>
      </div>
    </div>
  );
};
