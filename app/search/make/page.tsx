import { db } from "@/lib/database";
import { eq } from "drizzle-orm";
import { cars } from "@/lib/schema";
import { posts } from "@/lib/schema";
import { CarGrid } from "@/components/cars/CarGrid";
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

  return <CarGrid results={results}></CarGrid>;
}
