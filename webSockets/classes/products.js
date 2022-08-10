class Products {
  constructor() {
    this.storedData = [];
  }

  async save(product) {
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

  async getAll(){
    try {
      return Promise.resolve(this.storedData);
    }
    catch(err) {
      return err;
    }
  }

}

module.exports = Products;
