const { knex } = require("./database/DatabaseConfig");
const Tenant_Profile = require("./models/Tenant_Profile");
const User_Profile = require("./models/User_Profile");

async function createTables() {
  try {
    await knex.schema.createTable("tenant_profile", (table) => {
      table.increments("tenant_id").primary();
      table.string("tenant_name", 255);
      table.json("address");
      table.string("city", 255);
      table.string("state", 255);
      table.string("country", 255);
      table.string("zip_code", 255);
      table.string("phone", 255);
      table.string("web_url", 255);
    });

    await knex.schema.createTable("user_profile", (table) => {
      table.increments("id").primary();
      table.string("first_name", 255);
      table.string("last_name", 255);
      table.string("department", 255);
      table.string("designation", 255);
      table
        .integer("tenant_id")
        .unsigned()
        .references("tenant_profile.tenant_id");
      table.string("image_url", 255);
      table.string("city", 255);
      table.string("country", 255);
      table.string("bio", 255);
      table.json("social_links");
      table
        .integer("employee_id", 255)
        .unsigned()
        .references("tenant_profile.tenant_id");
    });

    console.log("Tables created successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error creating tables:", error);
    process.exit(1);
  }
}
