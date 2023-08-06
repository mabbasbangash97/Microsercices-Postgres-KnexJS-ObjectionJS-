const { Model } = require("objection");
const { initializeDB } = require("../database/DatabaseConfig");
const Tenant = require("../models/Tenant_Profile");

// Initialize the database connection
const knex = require("../database/knexfile");

exports.getAllTenants = async (req, res, next) => {
  await knex("Tenant_Profile")
    .select()
    .then(function (tenant) {
      res.status(200).send(tenant);
    })
    .catch((err) => {
      console.log("err", err.message);
      res.status(400).send("No data found in the table Tenant_Profile");
    });
};

exports.getTenantById = async (req, res, next) => {
  const tenant_id = req.params.id;

  await knex("Tenant_Profile")
    .select()
    .where("tenant_id", tenant_id)
    .then(function (tenant) {
      res.status(200).send(tenant);
    })
    .catch((err) => {
      console.log("err", err.message);
      res.status(400).send("No Tenant found with the provided tenant_id");
    });
};

exports.addTenantData = async (req, res, next) => {
  await knex("Tenant_Profile")
    .insert({
      timestamp: req.body.timestamp,
      data: req.body.data,
    })
    .catch((err) => {
      console.log("Error", err.message);
      res.status(400).json("Failed to add data to the Tenant_Profile");
    })
    .then((dataid) => {
      res
        .status(201)
        .json(
          `Successfully added data to Tenant_Profile with the id: ${dataid}`
        );
    });
};

exports.deleteTenant = async (req, res, next) => {
  const tenant_id = req.params.id;

  await knex("Tenant_Profile")
    .delete()
    .where("tenant_id", tenant_id)
    .catch((err) => {
      console.log("Error", err.message);
      res.status(400).json("Failed to delete data from Tenant_Profile");
    })
    .then((dataid) => {
      res
        .status(201)
        .json(
          `Successfully deleted data to Tenant_Profile with the id: ${dataid}`
        );
    });
};

exports.updateTenant = async (req, res, next) => {
  const tenant_id = req.params.id;
  const data = req.body;

  await knex("Tenant_Profile")
    .where("tenant_id", tenant_id)
    .update(data)
    .catch((err) => {
      console.log("Error", err.message);
      res.status(400).json("Failed to update data in Tenant_Profile");
    })
    .then((dataid) => {
      res
        .status(201)
        .json(
          `Successfully update data in Tenant_Profile with the id: ${dataid}`
        );
    });
};
