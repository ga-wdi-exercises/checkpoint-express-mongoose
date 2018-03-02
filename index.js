const express = require("express");
const hbs = require("hbs");
const parser = require("body-parser");

const app = express();

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
