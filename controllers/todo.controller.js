const fetchTodos = async (req, res) => {
    try {
        return res.status(200).json({message:"in todos"})
    } catch (err) {
        return res.status(500).json(err)
    }
}

module.exports = {
    fetchTodos
}