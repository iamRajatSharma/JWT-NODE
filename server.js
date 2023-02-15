const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = 3000
const session = require("express-session")


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: '123456',
    resave: true,
    saveUninitialized: true
}))

app.use('/', require("./routes/users"))
app.set("view engine", "ejs")

app.listen(port, () => console.log(`Example app listening on port ${port}!`))