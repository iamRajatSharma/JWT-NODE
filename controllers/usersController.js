const login = (req, res) => {
    res.render("index")
}

const register = (req, res) => {
    res.send("Register")
}

const doLogin = (req, res) => {
    res.send("do login")
}

const doRegister = (req, res) => {
    res.send("do Register")
}

module.exports = {
    login,
    register,
    doLogin,
    doRegister
}