const {Router} = require("express");

const ApiProducts = require("../classes/apiProducts");
const products = new ApiProducts();
const router = new Router();

//GET api/products
router.get("/index", (req, res) =>{
    res.render('partials/form');
})

//GET api/products
router.get("/products", products.getAllProducts)
  
//GET api/products/:id
router.get("/:id", products.getById)
  
//POST api/products
router.post("/", products.newProduct)
  
//PUT api/products/:id
router.put("/:id", products.updateProduct)
  
//DELETE api/products/:id
router.delete("/:id", products.deleteProduct)

module.exports = router;