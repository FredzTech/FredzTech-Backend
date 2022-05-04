const express = require("express");
const router = express.Router();
const {
  fetchPageController,
  postImageController,
  dataSaving,
} = require("../controllers/brandsControllers");
router.get("/test", async (req, res) => {
  try {
    res.send("Hello there from brands route test.").status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

router.get("/", fetchPageController);

router.post("/", dataSaving, postImageController);

module.exports = router;
