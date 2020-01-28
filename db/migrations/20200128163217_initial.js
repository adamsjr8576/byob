
exports.up = function(knex) {
  return knex.schema
    .createTable('businesses', table => {
      table.increments('id').primary;
      table.string('business_id');
      table.string('name');
      table.string('address');
      table.string('city');
      table.string('state');
      table.string('postal_code');
      table.integer('stars');
      table.integer('review_count');
      table.string('categories');

      table.timestamps(true, true);
    })
    .createTable('reviews', table => {
      table.increments('id').primary;
      table.string('business_id');
      table.integer('stars');
      table.integer('useful');
      table.integer('funny');
      table.integer('cool');
      table.string('text');
      table.string('date');
      table.integer('business_id').unsigned();
      table.foreign('business_id').references('businesses.id');

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {

};
