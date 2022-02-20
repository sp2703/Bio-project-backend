const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const CONFIG = require("./config/config");
const routes = require("./routes/search.route");

const app = express();
app.use(express.json());
app.use(cors());

if (CONFIG.APP_ENV === "development") {
  app.use(logger("dev"));
}

app.get("/health", async (req, res) => {
  res.status(200).send({
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  });
});

let port = CONFIG.port || process.env.PORT;
app.use("/services/search", routes);
app.listen(port, () => {
  console.log("Server up on " + port);
});
