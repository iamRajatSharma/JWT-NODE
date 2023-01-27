const express = require("express")
const app = express.Router()
const UserController = require("../controllers/usersController")

app.post("/login", UserController.doLogin)

app.post("/register", UserController.doRegister)

app.get("/login", UserController.login)

app.get("/register", UserController.register)

module.exports = app;