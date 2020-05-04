/**
 * CONFIGURATIONS
 */
const PORT = process.env.PORT || 8080;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const queryController = require("./controllers/queryController")
  .queryController;

const queryRouter = express.Router();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1/query", queryRouter);

queryController(queryRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
