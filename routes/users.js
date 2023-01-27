const express = require("express")
const app = express.Router()
const UserController = require("../controllers/usersController")
const middleware = require("../middleware/auth")

app.post("/login", UserController.doLogin)

app.post("/register", UserController.doRegister)

app.get("/", UserController.login)

app.get("/register", UserController.register)

app.get("/dashboard", UserController.dashboard)

module.exports = app;