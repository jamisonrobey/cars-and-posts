import { InferSelectModel } from "drizzle-orm";
import { posts } from "@/lib/schema";
import { Car } from "./Car";

interface CarGridProps {
  results: any[];
}

export const CarGrid: React.FC<CarGridProps> = ({ results }) => {
  return (
    <div className="flex items-center flex-col">
      {results.map((carPostData) => {
        const { posts: postData, cars: carData } = carPostData;

        return (
          <div className="m-4" key={postData.id}>
            <Car car={carData} post={postData} />
          </div>
        );
      })}
    </div>
  );
};
