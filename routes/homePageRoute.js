const express = require("express");
const router = express.Router();
const {
  testController,
  connectionController,
} = require("../controllers/homePageControllers");

router.get("/test", testController);
router.get("/connection", connectionController);

module.exports = router;
