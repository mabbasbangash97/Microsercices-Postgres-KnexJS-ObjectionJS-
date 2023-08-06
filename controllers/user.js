const { Model } = require("objection");
const { initializeDB } = require("../database/DatabaseConfig");
const User = require("../models/User_Profile");

// Initialize the database connection
const knex = require("../database/knexfile");

exports.getAllUsers = async (req, res, next) => {
  await knex("User_Profile")
    .select()
    .then(function (user) {
      res.status(200).send(user);
    })
    .catch((err) => {
      console.log("err", err.message);
      res.status(400).send("No data found in the table User_Profile");
    });
};

exports.getUserById = async (req, res, next) => {
  const user_id = req.params.id;

  await knex("User_Profile")
    .select()
    .where("user_id", user_id)
    .then(function (user) {
      res.status(200).send(user);
    })
    .catch((err) => {
      console.log("err", err.message);
      res.status(400).send("No User found with the provided user_id");
    });
};

exports.addUserData = async (req, res, next) => {
  // Use the User model to fetch all users
  await knex("User_Profile")
    .insert({
      timestamp: req.body.timestamp,
      data: req.body.data,
    })
    .catch((err) => {
      console.log("Error", err.message);
      res.status(400).json("Failed to add data to the User_Profile");
    })
    .then((dataid) => {
      res
        .status(201)
        .json(`Successfully added data to User_Profile with the id: ${dataid}`);
    });
};

exports.deleteUser = async (req, res, next) => {
  const user_id = req.params.id;
  // Use the User model to fetch all users
  await knex("User_Profile")
    .delete()
    .where("user_id", user_id)
    .catch((err) => {
      console.log("Error", err.message);
      res.status(400).json("Failed to delete data from User_Profile");
    })
    .then((dataid) => {
      res
        .status(201)
        .json(
          `Successfully deleted data to User_Profile with the id: ${dataid}`
        );
    });
};

exports.updateUser = async (req, res, next) => {
  const user_id = req.params.id;
  const data = req.body;
  // Use the User model to fetch all users
  await knex("User_Profile")
    .where("user_id", user_id)
    .update(data)
    .catch((err) => {
      console.log("Error", err.message);
      res.status(400).json("Failed to update data in User_Profile");
    })
    .then((dataid) => {
      res
        .status(201)
        .json(
          `Successfully update data in User_Profile with the id: ${dataid}`
        );
    });
};
