const express = require("express");
const router = express.Router();
const {
  fetchPageController,
  postImageController,
} = require("../controllers/worksControllers");
router.get("/test", async (req, res) => {
  try {
    res.send("Hello there from brands route test.").status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

router.get("/", fetchPageController);

router.post("/", postImageController);

module.exports = router;
