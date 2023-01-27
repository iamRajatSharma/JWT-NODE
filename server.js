const express = require('express')
const app = express()
const port = 3000

app.use('/', require("./routes/users"))
app.set("view engine", "ejs")

app.listen(port, () => console.log(`Example app listening on port ${port}!`))