const express = require('express');
const {Server: HTTPServer} = require('http');
const {Server: SocketServer} = require('socket.io');
const events = require("./socket-events");
const Products = require("./classes/products");
const Messages = require("./classes/messages");

const app = express();
const httpServer = new HTTPServer(app);
const socketServer = new SocketServer(httpServer);

const products = new Products();
const messages = new Messages();

const allProducts = products.getAll();
const allMessages = messages.getAll();

app.use(express.static("public"));

//Main route
app.get("/", (res, req) =>{
    res.sendFile(__dirname + "/public/index.html")
});

//Definicion de ciertos eventos
//socketServer.on para cuando se inicie la conexion por parte del cliente
//ese param socket seria la conexion del cliente
socketServer.on("connection", (socket) =>{
    console.log("Nuevo usuario conectado");

    socketServer.emit(
        events.UPDATE_PRODUCT, null,
        allProducts
        );
    
    socketServer.emit(
        events.UPDATE_MESSAGE, 
        null, 
        allMessages
        );

    //cuando haya un mensaje/prpducto nuevo sucedera lo siguiente
    socket.on(events.POST_PRODUCT, (product) =>{
        products.save(product);
        socketServer.sockets.emit(events.UPDATE_PRODUCT, products.getAll());
    });

    socket.on(events.POST_MESSAGE, (msg) =>{
        const _msg = {
            ...msg, 
            unique_id: socket.id,
            date: Date.now()
        };
        messages.save(_msg);
        socketServer.sockets.emit(events.NEW_MESSAGE, _msg);
    });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})