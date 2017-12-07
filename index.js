const express = require("express");
const hbs = require("express-handlebars");
const parser = require("body-parser");

const mongoose = require("./db/connection");
const Message = mongoose.model("Message");

const messages = require("./controllers/messages");

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "hbs");

app.engine(
  ".hbs",
  hbs({
    extname: ".hbs",
    partialsDir: "views/",
    layoutsDir: "views/",
    defaultLayout: "layout"
  })
);

app.use(parser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/messages", messages);

app.listen(app.get("port"), () => {
  console.log("We good.");
});
