const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require("./routes/users"))
app.set("view engine", "ejs")

app.listen(port, () => console.log(`Example app listening on port ${port}!`))