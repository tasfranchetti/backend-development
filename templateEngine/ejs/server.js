const express = require('express');
const productRouter = require('./routers/router');
const app = express();
const PORT = process.env.PORT || 8080;

//The app is able to receive json and urlencoded
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//static files usage - needed to add CSS styles to my 
app.use(express.static("views"));

app.set("view engine", "ejs");
 
app.use('/app', productRouter);

const server = app.listen(PORT, (req, res)=>{
    console.log(`Server listening on port: ${PORT}`)
})
server.on('error', error => console.log(`Error: ${error}`))

