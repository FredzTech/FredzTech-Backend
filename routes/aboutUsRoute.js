const express = require("express");
const router = express.Router();
const { fetchController } = require("../controllers/aboutUsControllers");
router.get("/test", async (req, res) => {
  try {
    res.send("Hello there from aboutUs Route test.").status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

router.get("/", fetchController);

router.post("/", async (req, res) => {
  let dataRecieved = req.body; //The power of body parser in interception manifested.
  try {
    const request = await AboutUs.create(dataRecieved);
    await request.save();
    res.send(request);
  } catch (error) {
    let err = error;
    res.send(err + " " + " The data is already registered.");

    res.status(500);
  }
});

module.exports = router;
