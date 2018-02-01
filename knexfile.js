module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost/blockchain_test',
    migrations: {
      directory: __dirname + '/db/migrations/test'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://localhost/blockchain',
    migrations: {
      directory: __dirname + '/db/migrations/development'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }
};