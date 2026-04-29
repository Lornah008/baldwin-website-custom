import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  full_name: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});

export const enquires = pgTable('enquires', {
  id: serial('id').primaryKey(),
  email: text('email'),
  subject: text('subject'),
  last_name: text('last_name'),
  first_name: text('first_name'),
  created_at: timestamp('created_at'),
  message: varchar('message', { length: 256 }),

})