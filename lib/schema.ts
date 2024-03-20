import {
  mysqlTable,
  boolean,
  varchar,
  int,
  mysqlEnum,
  text,
  date,
  decimal,
} from "drizzle-orm/mysql-core";

export const cars = mysqlTable("cars", {
  id: int("car_id").primaryKey().autoincrement().notNull(),
  model: varchar("model", { length: 50 }).notNull(),
  make: varchar("make", { length: 50 }).notNull(),
  year: int("year").notNull(),
  bodyType: mysqlEnum("body_type", [
    "SUV",
    "Sedan",
    "Hatchback",
    "Coupe",
    "Convertible",
    "Wagon",
    "Van",
  ]).notNull(),
  engineConfig: mysqlEnum("engine_config", [
    "I4",
    "I6",
    "V6",
    "V8",
    "V10",
    "V12",
  ]).notNull(),
  transmission: varchar("transmission", { length: 50 }).notNull(),
  colour: varchar("colour", { length: 50 }).notNull(),
  trim: varchar("trim", { length: 50 }),
  interiorColour: varchar("interior_colour", { length: 50 }),
});

export const posts = mysqlTable("posts", {
  id: int("post_id").primaryKey().autoincrement().notNull(),
  carId: int("car_id").references(() => cars.id),
  title: varchar("title", { length: 50 }).notNull(),
  description: text("description").notNull(),
  vin: varchar("vin", { length: 50 }).notNull(),
  uploadDate: date("upload_date").notNull(),
  sold: boolean("is_sold").default(false),
  imagePath: varchar("image_path", { length: 50 }).notNull(),
  mileage: int("mileage").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  views: int("views").default(0),
});
