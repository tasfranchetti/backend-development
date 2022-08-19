const {Router} = require("express");
const {adminAuth} = require("../middlewares/auth")
const productRouter = new Router();

const Container = require('../classes/container');
const dbProd = './resources/products.json';
const products = new Container(dbProd);


//Users and admin
productRouter.get("/:id?", async (req, res)=>{ 
    try {
        const id = req.params.id;
        if (id){
            const product = await products.getById(id);
            res.json(product);
        } else {
            const list = await products.getAll();
            res.json(list);
        }
    } catch (error) {
        return {message: error.message}
    }
})

//Only Admin
productRouter.post("/", adminAuth, async (req, res)=>{
    try {
        const product = req.body;
        await products.save(product);
        res.json(product);
    } catch (error) {
        return {message: error.message}
    }
})
  
productRouter.put("/:id", adminAuth, async (req, res)=>{
    try {
        const id = req.params.id
        const product = req.body;
        product.timeStamp = Date.now()
        await this.storageOpt.updateByID(id, product);
        const updatedProduct = await this.storageOpt.getById(id);
        res.json(updatedProduct);
    } catch (error) {
        return {message: error.message}
    } 
})
  
productRouter.delete("/:id", adminAuth, async (req, res)=>{
    try {
        const id = req.params.id
        await this.storageOpt.deleteById(id);
        res.json({message: `Carrito: ${id} eliminado con éxito`});
    } catch (error) {
        return {message: error.message}
    }
})

module.exports = productRouter;