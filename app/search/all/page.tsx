import { Car } from "@/components/cars/Car";
import { CarGrid } from "@/components/cars/CarGrid";
import { eq } from "drizzle-orm";
import { db } from "@/lib/database";
import { cars, posts } from "@/lib/schema";

export default async function All() {
  const results = await db
    .select()
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId));

  return <CarGrid results={results} />;
}
