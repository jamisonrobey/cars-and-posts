import { db } from "@/lib/database";
import { eq } from "drizzle-orm";
import { Car } from "@/components/cars/Car";
import { cars } from "@/lib/schema";
import { posts } from "@/lib/schema";
export default async function MakeSearch({
  searchParams,
}: {
  searchParams: { make: string };
}) {
  const { make } = searchParams;
  const results = await db
    .select()
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId))
    .where(eq(cars.make, make));

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
