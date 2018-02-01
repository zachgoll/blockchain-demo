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
    connection: 'postgres://gddsnltcqcsnay:6b7bd5f78eab23f5f0384ff0903955d4c54e4dc2f9fa0b7a2296314177629ff7@ec2-50-16-231-2.compute-1.amazonaws.com:5432/dfb1s48to9ente',
    migrations: {
      directory: __dirname + '/db/migrations/production'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    },
    ssl: true
  }
};