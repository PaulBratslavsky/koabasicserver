exports.up = (knex, Promise) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('content').notNullable();
    table.integer('rating').notNullable();
    table.boolean('published').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('posts');
};