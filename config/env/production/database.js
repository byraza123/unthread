// path: ./config/env/production/database.js

const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

  module.exports = ({ env }) => ({
    defaultConnection: "default",
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "codeBlock"),
        user: env("DATABASE_USER", "postgres"),
        password: env("DATABASE_PASSWORD", "post@asi#"),
        schema: env("DATABASE_SCHEMA", "public"),
      },
    }
  });
