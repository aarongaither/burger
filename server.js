const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);
app.use(express.static("public"));

app.listen(port, () => console.log(`Server listening: Port ${port}`));