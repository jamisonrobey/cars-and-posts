import React from "react";
import { MakesAndModels } from "@/types/interfaces";
import { db } from "@/lib/database";
import { eq } from "drizzle-orm";
import { cars, posts } from "@/lib/schema";
import { SelectParent } from "./select/SelectParent";
import { sans } from "@/lib/fonts";
export const getModels = async () => {
  const makesAndModels = await db
    .select({
      make: cars.make,
      model: cars.model,
    })
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId));

  const structuredMakesAndModels = makesAndModels.reduce<MakesAndModels>(
    (acc, car) => {
      const { make, model } = car;
      const lowerCaseMake = make.toLowerCase().replace(/-/g, "_");

      if (!acc[lowerCaseMake]) {
        acc[lowerCaseMake] = {
          models: [],
          count: 0,
        };
      }

      acc[lowerCaseMake].models.push(model);
      acc[lowerCaseMake].count++;

      return acc;
    },
    {}
  );
  return structuredMakesAndModels;
};

export const Search = async () => {
  const makesAndModels = await getModels();
  return (
    <div
      className={`${sans.className} w-5/6 h-72 grid grid-cols-1 bg-white shadow-2xl rounded-3xl`}
    >
      <div className="flex items-center justify-around border-b-2 border-greyLight">
        <SelectParent makesAndModels={makesAndModels} />
      </div>
      <div className="flex items-center justify-around"></div>
    </div>
  );
};

export default Search;
