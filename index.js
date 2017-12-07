const express = require("express")
const hbs = require("express-handlebars")
const parser = require("body-parser")
const methodOverride = require("method-override")
const messages = require("./controllers/messages")

const app = express()

app.set("port", process.env.PORT || 3000)
app.set("view engine", "hbs")

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(methodOverride("_method"))

app.engine(
  ".hbs",
  hbs({
    extname: ".hbs",
    partialsDir: "views/",
    layoutsDir: "views/",
    defaultLayout: "layout"
  })
)

app.use("/assets", express.static("public"))
app.use("/messages", messages)

app.get("/", (req, res) => {
  res.redirect("/messages")
})

app.listen(app.get("port"), () => {
  console.log("Up and running!")
})

module.exports = app
