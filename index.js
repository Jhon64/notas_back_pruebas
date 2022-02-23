const express = require("express");
const morgan = require("morgan");
const path = require("path");
const indexRouter = require("./src/routes/index.api.router");
const indexViewRouter = require("./src/routes/index.view.router");
const apurataRouter = require("./src/routes/apurata.router");
const bodyParser = require("body-parser");
const cors = require("cors");
const App = express();
//middlewares
App.use(morgan("dev"));

App.set("PORT", process.env.PORT || 5500);

App.set("views", path.join(__dirname, "src/views"));
App.set("view engine", "ejs");

App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());
App.use(cors());
App.use("/public", express.static(__dirname + "/public"));

App.use("/", indexViewRouter);
App.use("/apurata", apurataRouter);
App.use("/api/", indexRouter);

App.listen(App.get("PORT"), () => {
  console.log("http://localhost:" + App.get("PORT"));
});
