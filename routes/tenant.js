const express = require("express");
const {
  deleteTenant,
  updateTenant,
  getAllTenants,
  getTenantById,
  addTenantData,
} = require("../controllers/tenant");

const router = express.Router({ mergeParams: true });

router.get("/", getAllTenants);
router.get("/:id", getTenantById);
router.post("/:id", addTenantData);
router.patch("/:id", updateTenant);
router.delete("/:id", deleteTenant);

module.exports = router;
