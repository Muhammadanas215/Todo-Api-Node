const { fetchTodos } = require("../controllers/todo.controller")
const authenticate = require("../middleware/authorize")

const router = require("express").Router()

router.get("/todo",authenticate, fetchTodos)

module.exports = router