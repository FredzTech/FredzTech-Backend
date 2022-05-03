const express = require("express");
const router = express.Router();
const {
  rootController,
  testController,
  connectionController,
} = require("../controllers/homePageControllers");

// ROUTING IN ACTION
//===================
router.get("/", rootController);
router.get("/test", testController);
router.get("/connection", connectionController);

module.exports = router;
