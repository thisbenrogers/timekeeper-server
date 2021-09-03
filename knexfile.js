// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/timekeeper',
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    pool: {
      min: 2,
      max: 10,
    },
  }

};
