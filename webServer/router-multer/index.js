const express = require('express')
const multer = require('multer')
const {Router} = express;

const Container = require('./resources/script')
const dbName = './products.txt'
const container = new Container(dbName)

const app = express()
const PORT = 8080;

//Te app is able to receive json and urlencoded
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//static files usage
app.use(express.static("public"));

//Using the routers
const productRouter = Router();

(async () => {
    await container.loadFile();
})();
 
//GET api/products
productRouter.get("/", async (req, res)=>{ 
    const list = await container.getAll();
    res.json(list);
    //res.send(list)
    //console.log(req.query) //
})

//GET api/products/:id
productRouter.get("/:id", async (req, res)=>{ 
    const id = req.params.id;
    const product = await container.getById(id);
    res.json(product);

})

//POST api/products
productRouter.post("/", async (req, res)=>{
    const product = req.body;
    await container.save(product);
    res.json(product);
})

//PUT api/products/:id
productRouter.put("/:id", async (req, res)=>{
    const id = req.params.id
    const product = req.body;
    await container.updateByID(id, product);
    const updatedProduct = await container.getById(id);
    res.json(updatedProduct);
})

//DELETE api/products/:id
productRouter.delete("/:id", async (req, res)=>{
    const id = req.params.id
    await container.deleteById(id);
    res.json(`Producto: ${id} eliminado con éxito`);
})

app.use('/api/products', productRouter);

const server = app.listen(PORT, (req, res)=>{
    console.log(`Server listening on port: ${PORT}`)
})
server.on('error', error => console.log(`Error: ${error}`))

