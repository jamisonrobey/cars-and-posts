import { db } from "@/lib/database";
import { cars, posts } from "@/lib/schema";
import { Car } from "@/components/cars/Car";
import { eq } from "drizzle-orm";

export default async function Test() {
  console.log(process.env.DATABASE_URL);
  return <div className="w-full flex items-center justify-center"></div>;
}
//
