// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/byob_yelp',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
