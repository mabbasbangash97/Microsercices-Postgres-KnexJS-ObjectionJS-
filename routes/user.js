const express = require("express");
const {
  getAllUsers,
  getUserById,
  addUserData,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const router = express.Router({ mergeParams: true });

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/:id", addUserData);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
