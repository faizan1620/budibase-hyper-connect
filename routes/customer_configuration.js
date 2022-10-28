const express = require( "express");
const router = express.Router();
const customerConfigurationController = require("../controller/customer_configuration");

router.get("/", customerConfigurationController.getCustomers);
router.post("/", customerConfigurationController.createCustomerConfig);

module.exports = router;
