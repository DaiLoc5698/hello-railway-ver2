import dotenv from 'dotenv'
dotenv.config();

const knexConfig = {
  development: {
    client: 'mysql',
    version: '8.0',
    connection: {
      host : process.env.KNEX_HOST,
      port : process.env.MARIADB_PORT,
      user : process.env.MARIADB_USER,
      password : process.env.MARIADB_PASSWORD,
      database : process.env.MARIADB_DATABASE
    },
    migrations: {
      tableName: 'migrations'
    },
    log: {
      warn(message) {
        console.log('[knex] warn ', message)
      },
      error(message) {
        console.log('[knex] error ', message)
      },
      deprecate(message) {
        console.log('[knex] deprecate ', message)
      },
      debug(message) {
        console.log('[knex] debug ', message)
      },
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host : process.env.KNEX_HOST,
      port : process.env.MARIADB_PORT,
      user : process.env.MARIADB_USER,
      password : process.env.MARIADB_PASSWORD,
      database : process.env.MARIADB_DATABASE
    },
    migrations: {
      tableName: 'migrations'
    },
  },

  production: {
    client: 'mysql',
    version: '8.0',
    connection: {
      host : process.env.KNEX_HOST,
      port : process.env.MARIADB_PORT,
      user : process.env.MARIADB_USER,
      password : process.env.MARIADB_PASSWORD,
      database : process.env.MARIADB_DATABASE
    },
    migrations: {
      tableName: 'migrations'
    },
    log: {
      warn(message) {
        console.log('[knex] warn ', message)
      },
      error(message) {
        console.log('[knex] error ', message)
      },
      deprecate(message) {
        console.log('[knex] deprecate ', message)
      },
      debug(message) {
        console.log('[knex] debug ', message)
      },
    }
  }
}

export default knexConfig
