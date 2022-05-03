const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  try {
    res.send("Hello there from homepage test route.").status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

module.exports = router;
