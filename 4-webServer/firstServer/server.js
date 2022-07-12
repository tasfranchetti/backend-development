const http = require('http');

const server = http.createServer((request, reply) => {
    const hour = (new Date()).getHours();
    let message;
    if (hour >= 6 && hour <=12){
        message = "Good morning!"
    } else if (hour >=13 && hour <=19) {
        message = "Good afternoon!"
    } else {
        message = "Good evening!"
    }
    reply.end(message);
})

const serverConnected = server.listen(8080, ()=>{
    console.log(`Server connected: Port ${serverConnected.address().port}`)
}) 
