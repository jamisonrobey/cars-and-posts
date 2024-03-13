import { eq } from "drizzle-orm";
import { db } from "@/lib/database";
import { cars, posts } from "@/lib/schema";

export const getMakes = async () => {
  const makes = await db
    .select({
      type: cars.make,
    })
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId));

  const countMap = new Map();
  makes.forEach((make) => {
    const { type: makeName } = make;
    if (countMap.has(makeName)) {
      countMap.set(makeName, countMap.get(makeName) + 1);
    } else {
      countMap.set(makeName, 1);
    }
  });

  return countMap;
};
