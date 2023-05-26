
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model")
const authenticate = async (req, res, next) => {
    try {
        console.log(req.header)
        const token = req.header("Authorization").split(" ")[1]
        console.log(token)
        let decrypt = await jwt.verify(token, 'test')
        console.log(decrypt)
        req.user = decrypt
        next()
    } catch (err) {
        next(err)
    }

}

module.exports = authenticate