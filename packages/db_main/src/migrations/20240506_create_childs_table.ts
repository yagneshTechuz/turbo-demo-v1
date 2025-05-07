import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('childs', (table) => {
    table.increments('id').primary();
    table.integer('personId').unsigned().references('id').inTable('persons').onDelete('CASCADE');
    table.string('firstName').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.boolean('isActive').defaultTo(true);
    table.boolean('isDeleted').defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('childs');
}