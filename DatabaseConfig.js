const { Model } = require("objection");
const Knex = require("knex");

const databaseConfig = {
  client: "pg",
  connection: {
    host: process.env.POSTGRES_DATABASE_HOST, // Replace with your database host
    user: process.env.POSTGRES_USERNAME, // Replace with your database username
    password: process.env.POSTGRES_PASSWORD, // Replace with your database password
    database: process.env.SOCIAL_DB, // Replace with your database name
  },
};

function initializeDB() {
  const knex = Knex(databaseConfig);
  mod = Model.knex(knex);
  return knex;
}

module.exports = { initializeDB };
