const express = require('express');
//{tool name: new name} 
const {Server: HTTPServer} = require('http');
const {Server: SocketServer} = require('socket.io');
const events = require("./socket-events");
const Container = require("./utils/container");
const container = new Container();

const messages = container.getAll();

const app = express();
const httpServer = new HTTPServer(app);
const socketServer = new SocketServer(httpServer);

app.use(express.static("public"));

//Main route
app.get("/", (res, req) =>{
    res.sendFile(__dirname + "/public/index.html")
});

//Definicion de ciertos eventos
//socketServer.on para cuando se inicie la conexion por parte del cliente
//ese param socket seria la conexion del cliente
socketServer.on("connection", (socket) =>{
    console.log("Nuevo cliente conectado");
    socketServer.emit(
        events.UPDATE_MESSAGE, 
        "Bienvenido al WebSocket", 
        messages
        );

    //cuando haya un mensaje nuevo sucedera lo siguiente
    socket.on(events.POST_MESSAGE, (msg) =>{
        const _msg = {
            ...msg, 
            unique_id: socket.id,
            likes: 0,
            date: Date.now()
        };
        container.save(_msg);
        socketServer.sockets.emit(events.NEW_MESSAGE, _msg);
    });

    socket.on(events.LIKE_MESSAGE, (msgId) => {
        const msg = container.getById(msgId)
        msg.likes += 1;
        container.updateByID(msgId, msg)
        socketServer.sockets.emit(
            events.UPDATE_MESSAGE, 
            "Mensaje actualizado con éxito",
            container.getAll() // Actualizar los datos
            );
    })
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})