const Container = require('../classes/container');
const dbName = './resources/products.json';
const products = new Container(dbName);

//Callbacks for router class
const getAllProducts = async (req, res)=>{ 
    const list = await products.getAll();
    res.json(list);
}

const getById = async (req, res)=>{ 
    const id = req.params.id;
    const product = await products.getById(id);
    res.json(product);
}

const newProduct = async (req, res)=>{
    const product = req.body;
    await products.save(product);
    res.json(product);
}

const updateProduct = async (req, res)=>{
    const id = req.params.id
    const product = req.body;
    await products.updateByID(id, product);
    const updatedProduct = await products.getById(id);
    res.json(updatedProduct);
}
  
const deleteProduct = async (req, res)=>{
    const id = req.params.id
    await products.deleteById(id);
    res.json(`Producto: ${id} eliminado con éxito`);
}

exports.getAllProducts = getAllProducts;
exports.getById = getById;
exports.newProduct = newProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;