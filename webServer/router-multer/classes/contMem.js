class ContainerMemmory {
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
      return Promise.resolve(product.id)
    }
    catch(err) {
      return err;
    }
  }

  async updateByID(id, product) {
    const intId = parseInt(id);
    try {
      const result = this.storedData.find(i => i.id === intId);
      if (!result) {
        return {error : 'producto no encontrado'};
      } else {
        this.storedData = this.storedData.map(obj =>
          obj.id === intId ? {...product, id: intId} : obj
        )
      }      
    }
    catch(err) {
      return err;
    }
  }

  async getById(id){
    try { 
      let result = this.storedData.find(i => i.id == id);
      if (!result) {
        return { error : 'producto no encontrado'};
      } else {
        return Promise.resolve(result);
      }
    }
    catch(err){
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

  async deleteById(id){
    try {
      let index = this.storedData.findIndex(i => i.id == id);
      if(index == -1){
        return {error: 'producto no encontrado'};
      } else {
        this.storedData.splice(index, 1);
      }
    }
    catch(err) {
      return err;
    }
    
  }

  async deleteAll(){
    try {
        this.storedData = []
    }
    catch(err) {
      return err;
    }
  
  }
}

module.exports = ContainerMemmory;
