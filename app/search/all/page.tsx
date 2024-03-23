import { Car } from "@/components/cars/Car";
import { CarGrid } from "@/components/cars/CarGrid";
import { eq } from "drizzle-orm";
import { db } from "@/lib/database";
import { cars, posts } from "@/lib/schema";

const ITEMS_PER_PAGE = 5;

export default async function All({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = searchParams?.page ? parseInt(searchParams.page, 10) : 1;
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const results = await db
    .select()
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId))
    .offset(offset)
    .limit(ITEMS_PER_PAGE);

  const totalPages = Math.ceil(
    (await db.select().from(posts).innerJoin(cars, eq(cars.id, posts.carId)))
      .length / ITEMS_PER_PAGE
  );

  return (
    <CarGrid
      results={results}
      currentPage={page}
      totalPages={totalPages}
      basePath="/search/all"
    />
  );
}
