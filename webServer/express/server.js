const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080; //if "0", the port num is random

const Container = require('./script');
const productos = new Container('products.txt');

//error handling 
app.on("error", error => {
    console.log(`Error on the server: ${error}`);
})

const server = app.listen(PORT, () =>{
    console.log(`Server ready: ${server.address().port}`);
})  

//GET request - this is one route and I can have many
app.get('/', (req, res) => {
    res.send(`Visit /products or /randomProduct`);
})

app.get('/products', async (req, res) => {
    products = await productos.getAll();
    res.send(products);
})

app.get('/randomProduct', async (req, res) => {
    product = await productos.getRandom();
    res.send(product);
})



