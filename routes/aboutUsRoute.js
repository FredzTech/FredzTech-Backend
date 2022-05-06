const express = require("express");
const router = express.Router();

const {
  fetchPageController,
  postImageController,
  fetchPageAdminController,
} = require("../controllers/aboutUsControllers");

router.get("/test", async (req, res) => {
  try {
    res.send("Hello there from brands route test.").status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

router.get("/admin", fetchPageAdminController);

router.get("/", fetchPageController);

router.post("/", postImageController);

module.exports = router;
