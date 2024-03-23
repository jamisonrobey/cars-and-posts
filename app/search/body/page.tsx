import { db } from "@/lib/database";
import { CarGrid } from "@/components/cars/CarGrid";
import { eq, and } from "drizzle-orm";
import { posts, cars } from "@/lib/schema";

const ITEMS_PER_PAGE = 6;

export default async function BodySearch({
  searchParams,
}: {
  searchParams: { body: string; page?: string };
}) {
  const { body } = searchParams;
  const page = searchParams?.page ? parseInt(searchParams.page, 10) : 1;
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const results = await db
    .select()
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId))
    //@ts-ignore
    .where(eq(cars.bodyType, body))
    .offset(offset)
    .limit(ITEMS_PER_PAGE);

  const totalPages = Math.ceil(
    (
      await db
        .select()
        .from(posts)
        .innerJoin(cars, eq(cars.id, posts.carId))
        //@ts-ignore
        .where(eq(cars.bodyType, body))
    ).length / ITEMS_PER_PAGE
  );

  return (
    <CarGrid
      results={results}
      currentPage={page}
      totalPages={totalPages}
      basePath="/search/body"
      searchParams={{ body }}
    />
  );
}
