module.exports = (socket) => {
    socket.on("connect", payload => {
        console.log(socket.id)
        socket.emit("connect", { message: "connted!" })
    })
}