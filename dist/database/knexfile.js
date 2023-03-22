"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const knexConfig = {
  development: {
    client: 'mysql',
    version: '8.0',
    connection: {
      host: process.env.KNEX_HOST,
      port: process.env.MARIADB_PORT,
      user: process.env.MARIADB_USER,
      password: process.env.MARIADB_PASSWORD,
      database: process.env.MARIADB_DATABASE
    },
    migrations: {
      tableName: 'migrations'
    },
    log: {
      warn(message) {
        console.log('[knex] warn ', message);
      },
      error(message) {
        console.log('[knex] error ', message);
      },
      deprecate(message) {
        console.log('[knex] deprecate ', message);
      },
      debug(message) {
        console.log('[knex] debug ', message);
      }
    }
  },
  staging: {
    client: 'mysql',
    connection: {
      host: process.env.KNEX_HOST,
      port: process.env.MARIADB_PORT,
      user: process.env.MARIADB_USER,
      password: process.env.MARIADB_PASSWORD,
      database: process.env.MARIADB_DATABASE
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  production: {
    client: 'mysql',
    version: '8.0',
    connection: {
      host: process.env.KNEX_HOST,
      port: process.env.MARIADB_PORT,
      user: process.env.MARIADB_USER,
      password: process.env.MARIADB_PASSWORD,
      database: process.env.MARIADB_DATABASE
    },
    migrations: {
      tableName: 'migrations'
    },
    log: {
      warn(message) {
        console.log('[knex] warn ', message);
      },
      error(message) {
        console.log('[knex] error ', message);
      },
      deprecate(message) {
        console.log('[knex] deprecate ', message);
      },
      debug(message) {
        console.log('[knex] debug ', message);
      }
    }
  }
};
var _default = knexConfig;
exports.default = _default;