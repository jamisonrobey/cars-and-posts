import { db } from "@/lib/database";
import { Car } from "@/components/cars/Car";
import { CarGrid } from "@/components/cars/CarGrid";
import { eq, and } from "drizzle-orm";
import { posts, cars } from "@/lib/schema";
export default async function MakeSearch({
  searchParams,
}: {
  searchParams: { make: string; model: string };
}) {
  const { make, model } = searchParams;
  const results = await db
    .select()
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId))
    .where(and(eq(cars.make, make), eq(cars.model, model)));

  return <CarGrid results={results}></CarGrid>;
}
