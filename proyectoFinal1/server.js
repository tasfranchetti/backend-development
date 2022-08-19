const express = require('express');
const productRouter = require('./routers/products');
const cartRouter = require('./routers/cart');
const app = express();

//The app is able to receive json and urlencoded
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//static files usage
app.use(express.static("public"));

//routers
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, (req, res)=>{
    console.log(`Server listening on port: ${PORT}`)
})
server.on('error', error => console.log(`Error: ${error}`))

