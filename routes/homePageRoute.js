const express = require("express");
const router = express.Router();
const {
  rootController,
  testController,
} = require("../controllers/homePageControllers");

router.get("/test", testController);

router.get("/", rootController);

module.exports = router;
