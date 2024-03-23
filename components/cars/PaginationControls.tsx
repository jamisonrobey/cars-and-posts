import { sans } from "@/lib/fonts";
import Link from "next/link";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  searchParams?: Record<string, string>;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  basePath,
  searchParams = {},
}) => {
  const buildSearchParamsString = (params: Record<string, string>) => {
    const searchParamsString = new URLSearchParams(params).toString();
    return searchParamsString ? `?${searchParamsString}` : "";
  };

  return (
    <div className="flex justify-around mt-8 w-full items-center">
      {currentPage > 1 && (
        <Link
          href={`${basePath}${buildSearchParamsString({
            ...searchParams,
            page: (currentPage - 1).toString(),
          })}`}
        >
          <button
            className={`${sans.className} rounded-xl shadow-md text-2xl  bg-accent hover:scale-105 text-white duration-75`}
          >
            <CaretLeftIcon className="w-20 h-20" />
          </button>
        </Link>
      )}
      <div className={`${sans.className} text-gray-500 text-lg`}>
        Page {currentPage} of {totalPages}
      </div>
      {currentPage < totalPages && (
        <Link
          href={`${basePath}${buildSearchParamsString({
            ...searchParams,
            page: (currentPage + 1).toString(),
          })}`}
        >
          <button
            className={`${sans.className} rounded-xl shadow-md text-2xl  bg-accent hover:scale-105 text-white duration-75`}
          >
            <CaretRightIcon className="w-20 h-20" />
          </button>
        </Link>
      )}
    </div>
  );
};
