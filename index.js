const express = require("express");
const parser = require("body-parser");
const hbs = require("hbs");
const Message = require("./models/Message");

const messagesController = require("./controllers/messages");

const app = express();

app.set("view engine", "hbs");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get("/", (req, res) => {
  Message.find({}).then(message => {
    res.render("index", { message });
  });
});

app.use("/messages", messagesController);

app.listen(8080, () => console.log("this is running"));

module.exports = app;
