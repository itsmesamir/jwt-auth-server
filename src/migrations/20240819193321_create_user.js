export async function up(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.timestamps(true, true);
  });
}

export async function down(knex) {
  return knex.schema.dropTable("users");
}
