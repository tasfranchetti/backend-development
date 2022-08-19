const {Router} = require("express");
const cartRouter = new Router();

const Container = require('../classes/container');
const dbCart = './resources/cart.json';
const carts = new Container(dbCart);
const dbProd = './resources/cart.json';
const products = new Container(dbProd);


//Users and admin
cartRouter.post("/", async (req, res)=>{ 
    try {
        const cart = req.body;
        await carts.save(cart);
        res.json(cart.id);
    } catch (error) {
        return {message: error.message}
    }
})

cartRouter.delete("/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        await carts.deleteById(id);
        res.json({message: `Carrito: ${id} eliminado con éxito`});
    } catch (error) {
        return {message: error.message}
    }
})
  
cartRouter.get("/:id/products", async (req, res)=>{
    try {
        const id = req.params.id
        const cart = await carts.getById(id)
        res.json(cart);
    } catch (error) {
        return {message: error.message}
    } 
})

cartRouter.post("/:id/products/:id_prod", async (req, res)=>{
    try {
        const idCart = req.params.id
        const idProd = req.params.id_prod
        const cart = await carts.getById(idCart);
        const product = await products.getById(idProd)
        cart.push(product)
        res.json({message: `Carrito: ${idCart} agregó producto: ${idProd}`});
    
    } catch (error) {
        return {message: error.message}
    } 
})

cartRouter.delete("/:id/products/:id_prod", async (req, res)=>{
    try {
        const idCart = req.params.id
        const idProd = req.params.id_prod
        const cart = await carts.getById(idCart);
        const index = cart.findIndex(i => i.id == idProd);
        cart.splice(index, 1)
        res.json({message: `Carrito: ${idCart} eliminó producto: ${idProd}`});
    } catch (error) {
        return {message: error.message}
    } 
})


module.exports = cartRouter;