const express = require("express");
const Products = require("../classes/products");
const Messages = require("../classes/messages");

const products = new Products();
const messages = new Messages();

const routerHBS = express.Router();

routerHBS.get("/", (req, res) => {
    const productsList = products.getAll();
    const messagesList = messages.getAll();
    res.render("partials/form", { //revisar el "....." en hbs
        products: productsList, 
        productsExists: productsList.length > 0 ? true : false,
        messages: messagesList, 
        messagesExists: messagesList.length > 0 ? true : false
    }); 
});

routerHBS.post("/", async (req, res) => {
    await products.save({
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail
    })
    return res.redirect("/")
})

routerHBS.post("/", async (req, res) => {
    await messages.save({
        email: req.body.email,
        date: new Date(),
        message: req.body.message
    })
    return res.redirect("/")
})

module.exports = routerHBS;