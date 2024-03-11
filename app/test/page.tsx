import db from "@/lib/database";
import { cars } from "@/schema/schema";


export default async function Test() {
    const data = await db.select().from(cars)
    return(<>{JSON.stringify(data[0])}</>)
}