const {Router} = require("express");

const productsRoutes = require("../resources/products");
const router = new Router();

//GET api/products
router.get("/", productsRoutes.getAllProducts)
  
//GET api/products/:id
router.get("/:id", productsRoutes.getById)
  
//POST api/products
router.post("/", productsRoutes.newProduct)
  
//PUT api/products/:id
router.put("/:id", productsRoutes.updateProduct)
  
//DELETE api/products/:id
router.delete("/:id", productsRoutes.deleteProduct)

module.exports = router;