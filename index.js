const express = require("express")
const hbs = require("express-handlebars")
const parser = require("body-parser")
const methodOverride = require("method-override")
const app = express()

const messages = require("./controllers/messages")

app.set("port", process.env.PORT || 3000)
app.set("view engine", "hbs")

app.engine(
	".hbs",
	hbs({
		extname: ".hbs",
		partialsDir: "views/",
		layoutsDir: "views/",
		defaultLayout: "layout"
	})
)

app.use(parser.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// app.use(bodyParser.json())

app.use("/messages", messages)

app.get("/", (req, res) => {
	res.redirect("/messages")
})

app.listen(app.get("port"), () => {
	console.log("It's aliiive!")
})

module.exports = app
