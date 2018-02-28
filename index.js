const express = require("express");
const hbs = require("handlebars");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://localhost/messageboard", {
    useMongoClient: true
  })
  .then(() => console.log("mongodbconnected"))
  .catch(err => console.log(err));

require("./models/Message");
const Message = mongoose.model("message");

mongoose.Promise = global.Promise;

app.engine(
  "handlebars",
  hbs({
    defaultLayout: "layout"
  })
);
app.set("view engine", "handlebars");

//index route
app.get("/", (req, res) => {
  const title = "welcome";
  res.render("index");
});

//about route
app.get("/new", (req, res) => {
  res.render("NEW");
});

const port = 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
