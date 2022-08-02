const express = require('express');
const productRouter = require('./routers/router');
const handlebars = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;

//The app is able to receive json and urlencoded
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//static files usage
//app.use(express.static("public"));

app.set("view engine", "ejs");
 
app.use('/app', productRouter);

const server = app.listen(PORT, (req, res)=>{
    console.log(`Server listening on port: ${PORT}`)
})
server.on('error', error => console.log(`Error: ${error}`))

