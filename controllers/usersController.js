const Users = require("../models/usersModel")
const db = require("../db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const authUser = require("../middleware/auth")
const SECRET = "HelloWorld"

const login = async (req, res) => {
    res.render("index")
}

const register = (req, res) => {
    res.render("Register")
}

const doLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const checkUserExists = await Users.findOne({ email: email })
        if (!checkUserExists) {
            return res.status(404).json({ msg: "User Not Found!!", flag: 1 })
        }

        const matchpassword = await bcrypt.compare(password, checkUserExists.password)

        if (!matchpassword) {
            return res.status(400).json({ "message": "Invalid Credentials" })
        }
        const token = jwt.sign({ email: checkUserExists.email, id: checkUserExists._id }, SECRET);
        res.status(201).json({ user: checkUserExists, token: token })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ "error": error })
    }
}

const doRegister = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const checkUserExists = await Users.findOne({ email: email })
        if (checkUserExists) {
            return res.status(400).json({ msg: "User Already Exists!!", flag: 1 })
        }

        const hashpassword = await bcrypt.hash(password, 10)
        const result = await Users({
            name: name,
            email: email,
            password: hashpassword
        })

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET);
        res.status(201).json({ user: result, token: token })
        result.save()
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error })
    }
}

const dashboard = (authUser, req, res) => {
    res.send({"message":"Success"})
}

module.exports = {
    login,
    register,
    doLogin,
    doRegister,
    dashboard
}