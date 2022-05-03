const rootController = (req, res) => {
  try {
    res.send("Hello there from homepage route handler in action.").status(200);
  } catch (error) {
    res.send(error).status(500);
  }
};
const testController = (req, res) => {
  try {
    res
      .send("Hello there from homepage test route handler in action.")
      .status(200);
  } catch (error) {
    res.send(error).status(500);
  }
};

const connectionController = (req, res) => {
  try {
    res
      .send("Hello this is the connection route handler in action.")
      .status(200);
  } catch (error) {
    res.send(error).status(500);
  }
};

module.exports = { rootController, testController, connectionController };
