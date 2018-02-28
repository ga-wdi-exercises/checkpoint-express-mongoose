const express = require("express")
const hbs = require("hbs")
const app = express()
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const testController = require("./controllers/message")

app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride("_method"))


app.get("/", (req, res) => {
   res.render("index")
})


app.use('/messages', messageController)


app.listen(4000, () => {
    console.log("Connected to 4000!")
})
