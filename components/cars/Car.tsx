import { CustomImage } from "../shared/CustomImage";
import Link from "next/link";
import { sans, boldSans } from "@/lib/fonts";
import { cars, posts } from "@/lib/schema";
import { InferSelectModel } from "drizzle-orm";

type Cars = InferSelectModel<typeof cars>;
type Posts = InferSelectModel<typeof posts>;
type CarProps = {
  post: Posts;
  car: Cars;
};

export const Car: React.FC<CarProps> = async ({ car, post }) => {
  return (
    <div
      className={`${sans.className} rounded-lg shadow-xl hover:scale-105 duration-150 flex h-96 w-9/10 items-center flex-col justify-center`}
    >
      <div className="select-none max-w-2xl overflow-hidden">
        <CustomImage
          width={672}
          height={384}
          src={car.imagePath}
          alt="thumbnail"
        />
      </div>
      <div className="items-center justify-center max-w-2xl grid-cols-2 grid p-4">
        <Link
          href="/"
          className={`${boldSans.className} hover:underline text-2xl`}
        >
          {post.title}
        </Link>
        <p className="justify-self-end text-2xl">${post.price}</p>
        <div className="mt-4 text-gray-500 grid col-span-2 sm:col-span-1 grid-cols-2 ">
          <p>- {car.bodyType}</p>
          <p>- {car.engineConfig}</p>
          <p>- {car.transmission}</p>
          <p>- {post.mileage} km</p>
        </div>
      </div>
    </div>
  );
};
