import { eq } from "drizzle-orm";
import { db } from "@/lib/database";
import { cars, posts } from "@/lib/schema";

export const getModels = async () => {
  const models = await db
    .select({
      model: cars.model,
    })
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId));

  const countMap = new Map();
  models.forEach((model) => {
    const { model: modelName } = model;
    if (countMap.has(modelName)) {
      countMap.set(modelName, countMap.get(modelName) + 1);
    } else {
      countMap.set(modelName, 1);
    }
  });

  return countMap;
};
