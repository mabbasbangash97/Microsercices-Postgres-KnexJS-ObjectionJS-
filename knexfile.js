const { knexSnakeCaseMappers } = require("objection");

const config = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.POSTGRES_DATABASE_LIST || "social",
      user: process.env.POSTGRES_USERNAME || "postgres",
      password: process.env.POSTGRES_PASSWORD || "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "social",
    },
    seeds: {
      directory: "./seeds",
    },
    ...knexSnakeCaseMappers,
  },
};
module.exports = require("knex")(config);
