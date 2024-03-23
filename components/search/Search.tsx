import React from "react";
import { MakesModels } from "@/types/interfaces";
import { db } from "@/lib/database";
import { eq } from "drizzle-orm";
import { cars, posts } from "@/lib/schema";
import { SelectParent } from "./select/SelectParent";
import { sans } from "@/lib/fonts";
import { SedanIcon, UteIcon, VanIcon, SuvIcon } from "./Icons";
import Link from "next/link";

const getModels = async (): Promise<MakesModels> => {
  const results = await db
    .select({
      make: cars.make,
      model: cars.model,
    })
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId));

  const makesModels: MakesModels = results.reduce((acc, { make, model }) => {
    if (!acc[make]) {
      acc[make] = { models: {}, count: 0 };
    }
    if (!acc[make].models[model]) {
      acc[make].models[model] = 0;
    }
    acc[make].models[model]++;
    acc[make].count++;
    return acc;
  }, {} as MakesModels);

  return makesModels;
};

export const Search = async () => {
  const makesAndModels = await getModels();
  return (
    <div
      className={`${sans.className} w-5/6 h-72 grid grid-cols-1 bg-white shadow-2xl rounded-3xl`}
    >
      <div className="flex items-center justify-around border-b-2 border-greyLight">
        <SelectParent makesModels={makesAndModels} />
      </div>
      <div className="flex items-center justify-around">
        <Link href="/search/body?body=Sedan">
          <SedanIcon />
        </Link>
        <Link href="/search/body?body=Ute">
          <UteIcon />
        </Link>
        <Link href="/search/body?body=Van">
          <VanIcon />
        </Link>
        <Link href="/search/body?body=SUV">
          <SuvIcon />
        </Link>
      </div>
    </div>
  );
};

export default Search;
