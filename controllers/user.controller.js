const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    try {
        const isExist = await userModel.findOne({
            where: {
                email: req.body.email
            }
        })

        if (isExist !== null) {
            return res.status(400).json({
                message: "User already exist!"
            })
        }
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const snap = await userModel.create(req.body)
        console.log(snap)
        return res.status(200).json(snap)
    } catch (err) {
        return res.status(500).json(err)
    }
}


const login = async (req, res) => {
    try {
        const existed = await userModel.findOne({
            where: {
                email: req.body.email
            }
        })
        let isMatched = await bcrypt.compare(req.body.password, existed['dataValues']['password'])
        if (!isMatched) {
            return res.status(400).json({
                message: "Password is invalid!"
            })
        }
        const token = await jwt.sign({
            id: existed["dataValues"]["id"],
            email: existed["dataValues"]["email"]
        }, 'test',
            { expiresIn: "1h" })

        return res.status(200).json({
            token,
            message: "Logged in successfully!"
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

module.exports = {
    register,
    login
}