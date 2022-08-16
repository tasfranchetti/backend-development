class Products {
  constructor() {
    this.storedData = [];
  }

  save(product) {
    try {
      if (this.storedData.length === 0) {
        product.id = 1;
      } else {
        product.id = this.storedData[this.storedData.length - 1].id + 1;
      }
      this.storedData.push(product)
    }
    catch(err) {
      return err;
    }
  }

  getAll(){
    try {
      return this.storedData;
    }
    catch(err) {
      return err;
    }
  }
}
module.exports = Products;
