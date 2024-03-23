import { db } from "@/lib/database";
import { CarGrid } from "@/components/cars/CarGrid";
import { eq } from "drizzle-orm";
import { posts, cars } from "@/lib/schema";

const ITEMS_PER_PAGE = 5;

export default async function MakeSearch({
  searchParams,
}: {
  searchParams: { make: string; page?: string };
}) {
  const { make } = searchParams;
  const page = searchParams?.page ? parseInt(searchParams.page, 10) : 1;
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const results = await db
    .select()
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId))
    .where(eq(cars.make, make))
    .offset(offset)
    .limit(ITEMS_PER_PAGE);

  const totalPages = Math.ceil(
    (
      await db
        .select()
        .from(posts)
        .innerJoin(cars, eq(cars.id, posts.carId))
        .where(eq(cars.make, make))
    ).length / ITEMS_PER_PAGE
  );

  return (
    <CarGrid
      results={results}
      currentPage={page}
      totalPages={totalPages}
      basePath="/search/make"
      searchParams={{ make }}
    />
  );
}
