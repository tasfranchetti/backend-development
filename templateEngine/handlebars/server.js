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

const hbs = handlebars.create({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/public/views/layout",
    partialsDir: __dirname + "/public/views/partials"
});

app.engine("hbs", hbs.engine);
app.set('views', "./public/views");
app.set("view engine", "hbs");
 
app.use('/app', productRouter);

const server = app.listen(PORT, (req, res)=>{
    console.log(`Server listening on port: ${PORT}`)
})
server.on('error', error => console.log(`Error: ${error}`))

