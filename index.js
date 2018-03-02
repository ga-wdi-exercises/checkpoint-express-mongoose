const express = require("express");
const hbs = require("hbs");
const parser = require("body-parser");

const app = express();

app.set("view engine", "hbs");
// check parser if error occurs
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const Message = require("./models/Message.js");
const messagesController = require("./controllers/messages.js");

app.get("/", (req, res) => {
  Message.find({}).then(messages => {
    res.render("index", { messages });
  });
});

app.use("/messages", messagesController);

app.listen(3000, () => console.log("server is running"));

module.exports = app;
