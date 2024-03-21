import { db } from "@/lib/database";
import { cars, posts } from "@/lib/schema";
import { Car } from "@/components/cars/Car";
import { eq } from "drizzle-orm";

export default async function Test() {
  const result = await db
    .select()
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId));
  const { posts: postsData, cars: carsData } = result[1];

  return (
    <div className="w-full flex items-center justify-center">
      <Car car={carsData} post={postsData} />
    </div>
  );
}
//
