const jwt = require("jsonwebtoken")
const SECRET = "HelloWorld"

const authUser = (req, res, next) => {
    try {
        let token = req.headers.authorization
        if (token) {
            token = token.split(" ")[1];
            let user = jwt.verify(token, SECRET)
            req.user_id = user.id
        }
        else {
            return res.status(401).json({ "message": "Unauthorization User" })
        }
        next();
    }
    catch (error) {
        return res.status(401).json({ "message": "Unauthorization User" })
    }
}

module.exports = {
    authUser
}