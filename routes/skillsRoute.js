const express = require("express");
const router = express.Router();
const {
  fetchPageController,
  postImageController,
  fetchPageAdminController,
} = require("../controllers/skillsControllers");
router.get("/test", async (req, res) => {
  try {
    res.send("Hello there from brands route test.").status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

router.get("/", fetchPageController);

router.get("/admin", fetchPageAdminController);

router.post("/", postImageController);

module.exports = router;
