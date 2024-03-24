import Image from "next/image";
import { CustomImage } from "@/components/shared/CustomImage";
import { db } from "@/lib/database";
import { boldSans, logoFont, sans } from "@/lib/fonts";
import { cars, posts } from "@/lib/schema";
import { eq } from "drizzle-orm";

export default async function Id({
  searchParams,
}: {
  searchParams: { id: number };
}) {
  const { id } = searchParams;
  const result = await db
    .select()
    .from(posts)
    .innerJoin(cars, eq(cars.id, posts.carId))
    .where(eq(posts.postId, id));

  return result.length === 0 ? (
    <p className="text-center">
      Car ID not found. This shouldn't happen, please report this.
    </p>
  ) : (
    <div className="flex flex-col justify-center sm:w-3/5 m-auto items-center sm:shadow-2xl sm:rounded-lg">
      <div className="w-full flex items-center justify-center sm:justify-between p-4">
        <h1 className={`${boldSans.className} text-2xl `}>
          {result[0].posts.title}
        </h1>
        <p className={`${logoFont.className} text-3xl  text-accent`}>Carmart</p>
      </div>
      <div className="mx-4 w-auto mb-8">
        <div className="relative">
          <Image
            src={result[0].cars.imagePath}
            alt={result[0].posts.title}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div className="my-8 p-8 grid grid-cols-3">
          <h1 className={`${boldSans.className}  col-span-3 text-3xl`}>
            {[result[0].posts.title]}
          </h1>
          <div className="flex items-stretch mt-8 justify-between col-span-3">
            <p className="w-64">{result[0].posts.description}.</p>
            <h2 className={`${boldSans.className}  text-5xl`}>
              ${result[0].posts.price}
            </h2>
          </div>
          <h2
            className={`${boldSans.className}  mt-16 border-t border-t-gray-300 py-4 col-span-3 text-3xl`}
          >
            Specifications:
          </h2>
          <div className="flex flex-col justify-start">
            <p className="text-gray-400">Body</p>
            <p className="text-xl mb-4">{result[0].cars.bodyType}</p>
          </div>
          <div className="flex flex-col justify-start ">
            <p className="text-gray-400">Trim</p>
            <p className="text-xl mb-4">{result[0].cars.trim}</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-gray-400">Year</p>
            <p className="text-xl mb-4">{result[0].cars.year}</p>
          </div>

          <div className="flex flex-col justify-start">
            <p className="text-gray-400">Engine config</p>
            <p className="text-xl ">{result[0].cars.engineConfig}</p>
          </div>
          <div className="flex flex-col justify-start ">
            <p className="text-gray-400">Transmission</p>
            <p className="text-xl ">{result[0].cars.transmission}</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-gray-400">VIN</p>
            <p className="text-xl">{result[0].posts.vin}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
