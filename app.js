const express = require('express');
const app = express();
const sequelize = require('./db/config');
const cors = require("cors")
const userRoutes = require("./routes/user.route")
const todoRoutes = require("./routes/todo.route")
const httpsServer = require("https").createServer(app)
const io = require("socket.io")(httpsServer, {
    cors: {
        origin: '*',
       
    }
})


app.use(cors({origin:true}))
app.use(express.json());
app.use(userRoutes)
app.use(todoRoutes)

//socket connection
const messageHandler = require("./events/message.handler")
//make a socket connection
io.on('connection', (socket) => {
    messageHandler(socket)
})

httpsServer.listen(5000, ()=> {
    console.log('server listen at port 5000...');
    try{
        sequelize.authenticate()
        .then(()=>{
            console.log('DB connected!')
        }); 
    }
    catch(err){
        console.error('Unable to connect to DB', err)
    }
});

