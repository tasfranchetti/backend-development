//Memory storage option
//Add the multiple line comment signs to use the file storage option below

const ContainerMemmory = require('../classes/contMem');
const products = new ContainerMemmory();

/*
//File storage option
//Remove the multiple line comment signs to use this file storage option

const ContainerFile = require('../classes/contFile');
const dbName = './resources/products.json';
const products = new ContainerFile(dbName);

*/

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