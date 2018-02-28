var Message = require("../models/Message");
var express = require("express");
var router = express.Router();
var app = express();

app.get("/", (req, res) => {
    res.render(res);
})
router.get("/", (req, res) => {
    Message.find({}).then((messages)=>{
        res.render("messages/show", {messages});
    }).catch(err, () => console.log(err));
})

router.get("/", (req, res) =>{
    res.render("messages/new")
})

// app.pos