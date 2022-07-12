const express = require('express')
const app = express()

const Container = require('./script4')
const productos = new Container('products.txt')

//error handling 
app.on("error", error => console.log(`Error on the server: ${error}`))

const PORT = 8080;
//if "0", the port num is random

const server = app.listen(PORT, () =>{
    console.log(`Server ready: ${server.address().port}`)
})  

//GET request - this is one route and I can have many
app.get('/products', (req, res) => {
    res.send(`List of all products: ${productos.getAll()}`)
})

let visitas = 0;
app.get('/randomProduct', (req, res) => {
    res.send(`The random product is: ${productos.getRandom()}`)
})


