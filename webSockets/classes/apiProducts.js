//Memory storage option
const Products = require('./products');

class ApiProducts{
    constructor() {
        this.storageOpt = new Products();
    }
    //Callbacks for router class
    getAllProducts = async (req, res)=>{ 
        try {
            const list = await this.storageOpt.getAll();
            if (list.length > 0){
                res.render('partials/productList', {
                    products: list,
                    productsExist: true
                });
            } else {
                res.render('partials/productList', {
                    productsExist: false
                });
            }
            
        } catch (error) {
            return {message: error.message}
        }
    }

    getById = async (req, res)=>{ 
        try {
            const id = req.params.id;
            const product = await this.storageOpt.getById(id);
            res.json(product);
        } catch (error) {
            return {message: error.message}
        }
    }

    newProduct = async (req, res)=>{
        try {
            const product = req.body;
            await this.storageOpt.save(product);
            res.render('partials/form');
        } catch (error) {
            return {message: error.message}
        }
    }

    updateProduct = async (req, res)=>{
        try {
            const id = req.params.id
            const product = req.body;
            await this.storageOpt.updateByID(id, product);
            const updatedProduct = await this.storageOpt.getById(id);
            res.json(updatedProduct);
        } catch (error) {
            return {message: error.message}
        } 
    } 

    deleteProduct = async (req, res)=>{
        try {
            const id = req.params.id
            await this.storageOpt.deleteById(id);
            res.json(`Producto: ${id} eliminado con éxito`);
        } catch (error) {
            return {message: error.message}
        }
    }
}

module.exports = ApiProducts;
