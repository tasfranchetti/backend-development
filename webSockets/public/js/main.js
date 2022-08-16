const socket = io();

socket.on("connect", () =>{
    console.log("Conectado al servidor");
})
/*
socket.on('UPDATE_PRODUCT', async (data) => {
    await fetch('./views/table.hbs')
        .then(data => data.text())
        .then(response => {
            const hbsCompile = Handlebars.compile(response);
            const html = hbsCompile({ products: data });
            document.getElementById('productList').innerHTML = html;
        })
})
*/

socket.on("UPDATE_MESSAGE", (msg, allMessages) =>{
    document.getElementById("chatBox").innerHTML = "";
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
        <b>${msg.email} (${msg.date}):</b> ${msg.text}
    </div>
    `;
}

function sendProduct(){
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const thumbnail = document.getElementById("thumbnail").value;
    socket.emit("POST_PRODUCT", {title, price, thumbnail})
}

function sendMessage(){
    const email = document.getElementById("email").value;
    const text = document.getElementById("text").value;
    socket.emit("POST_MESSAGE", {email, text})
}
