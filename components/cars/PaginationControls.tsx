import Link from "next/link";

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
    <div className="flex justify-center mt-8">
      {currentPage > 1 && (
        <Link
          href={`${basePath}${buildSearchParamsString({
            ...searchParams,
            page: (currentPage - 1).toString(),
          })}`}
        >
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4">
            Previous
          </button>
        </Link>
      )}

      {currentPage < totalPages && (
        <Link
          href={`${basePath}${buildSearchParamsString({
            ...searchParams,
            page: (currentPage + 1).toString(),
          })}`}
        >
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Next
          </button>
        </Link>
      )}
    </div>
  );
};
