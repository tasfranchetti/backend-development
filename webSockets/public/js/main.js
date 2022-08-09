const socket = io();

socket.on("connect", () =>{
    console.log("Conectado al servidor");
})

socket.on("UPDATE_MESSAGE", (msg, allMessages) =>{
    document.querySelector("#chatBox").innerHTML = "";
    allMessages
    .sort((a,b) => a.date - b.date)
    .forEach(msg => appendMessage(msg));
});

socket.on("NEW_MESSAGE", (msg) =>{
    appendMessage(msg);
})

function appendMessage (msg) {
    document.getElementById("chatBox").innerHTML += `
    <div>
        <b>${msg.nombre} (${msg.unique_id}) (${msg.date}):</b> ${msg.mensaje}
        <hr/>
        <button onclick="likeMsg(${msg.id})">
          Like (${msg.likes})
        </button>
    </div>
    `;
}

function sendMessage(){
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;

    socket.emit("POST_MESSAGE", {nombre, mensaje})
}

function likeMsg (msgId){
    socket.emit("LIKE_MESSAGE", msgId);
}