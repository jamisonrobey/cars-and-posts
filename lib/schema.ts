import {
  pgTable,
  pgEnum,
  varchar,
  integer,
  text,
  boolean,
  date,
  decimal,
  primaryKey,
} from "drizzle-orm/pg-core";

export const bodyTypeEnum = pgEnum("body_type_enum", [
  "SUV",
  "Sedan",
  "Hatchback",
  "Coupe",
  "Convertible",
  "Wagon",
  "Van",
  "Spyder",
  "Roadster",
]);
export const engineConfigEnum = pgEnum("engine_config_enum", [
  "I4",
  "I6",
  "V6",
  "V8",
  "V10",
  "V12",
  "Electric",
  "W12",
]);
export const transmissionEnum = pgEnum("transmission_enum", [
  "Automatic",
  "Manual",
  "CVT",
]);

export const cars = pgTable("cars", {
  id: integer("id").primaryKey(),
  model: text("model").notNull(),
  make: text("make").notNull(),
  year: integer("year").notNull(),
  bodyType: bodyTypeEnum("body_type").notNull(),
  engineConfig: engineConfigEnum("engine_config").notNull(),
  transmission: transmissionEnum("transmission").notNull(),
  imagePath: text("image_path").notNull(),
  trim: text("trim"),
});

export const posts = pgTable("posts", {
  postId: integer("post_id").primaryKey(),
  carId: integer("car_id").references(() => cars.id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  vin: text("vin").notNull(),
  uploadDate: date("upload_date").notNull(),
  isSold: boolean("is_sold").default(false),
  mileage: integer("mileage").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  views: integer("views").default(0),
});
