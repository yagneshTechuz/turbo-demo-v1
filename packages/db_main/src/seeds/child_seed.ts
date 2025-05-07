import type { Knex } from "knex";


export function seed(knex : Knex) {
  return knex("childs")
    .del()
    .then(function () {
      return knex("childs").insert([
        {
          id: 1,
          personId: 1,
          firstName: "John",
          created_at: new Date(),
          updated_at: new Date(),
          isActive: true,
          isDeleted: false,
        },
        {
          id: 2,
          personId: 2,
          firstName: "Jane",
          created_at: new Date(),
          updated_at: new Date(),
          isActive: true,
          isDeleted: false,
        },
        {
          id: 3,
          personId: 3,
          firstName: "Alice",
          created_at: new Date(),
          updated_at: new Date(),
          isActive: true,
          isDeleted: false,
        },
      ]);
    }).catch((error : any) => {
      console.error("Error seeding data:", error);
    }
  );
}
