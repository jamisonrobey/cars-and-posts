import { mysqlTable, varchar, int } from 'drizzle-orm/mysql-core';

export const cars = mysqlTable('cars', {
      car_id: int('car_id'),
        make: varchar('make', { length: 50 }),
          model: varchar('model', { length: 50 }),
            body_type: varchar('body_type', { length: 50 }),
});
