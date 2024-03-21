import { Car } from "@/components/cars/Car";
import { eq } from "drizzle-orm";
import { db } from "@/lib/database";
import { cars, posts } from "@/lib/schema";

export default async function All() {
  const results = await db
    .select()
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId));

  return (
    <div className="flex items-center flex-col justfy-center">
      {results.map((carPostData) => {
        const { posts: postData, cars: carData } = carPostData;

        return (
          <div className="m-4">
            <Car car={carData} post={postData} />
          </div>
        );
      })}
    </div>
  );
}
