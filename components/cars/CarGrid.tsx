import { InferSelectModel } from "drizzle-orm";
import { posts } from "@/lib/schema";
import { Car } from "./Car";
import { PaginationControls } from "./PaginationControls";

interface CarGridProps {
  results: any[];
  currentPage: number;
  totalPages: number;
  basePath: string;
  searchParams?: Record<string, string>;
}

export const CarGrid: React.FC<CarGridProps> = ({
  results,
  currentPage,
  totalPages,
  basePath,
  searchParams = {},
}) => {
  return (
    <div className="flex items-center flex-col bg-white">
      <div className="grid grid-cols-3 w-3/4">
        {results.map((carPostData) => {
          const { posts: postData, cars: carData } = carPostData;
          return (
            <div className="m-4">
              <Car key={carData.id} car={carData} post={postData} />
            </div>
          );
        })}
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        basePath={basePath}
        searchParams={searchParams}
      />
    </div>
  );
};
