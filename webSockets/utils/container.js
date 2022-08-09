class Container {
  constructor() {
    this.storedData = [];
  }

  save(item) {
    const lastId = this.storedData.reduce(
      (acc, el) => {
      return el.id > acc ? el.id : acc 
      }, 
      0
  );
  const newId = lastId + 1;
  item.id = newId;
    this.storedData.push(item)
    return item.order;
  }

  getAll(){
    return this.storedData;
  }

  getById(id){
    return this.storedData.find(el => el.id === id);
  }

  updateByID(id, item) {
    const index = this.storedData.findIndex(el => el.id === id);
    this.storedData[index] = item;
  }
  
  deleteById(id){
    let index = this.storedData.findIndex(i => i.id == id);
    this.storedData.splice(index, 1);
  }
}

module.exports = Container;
