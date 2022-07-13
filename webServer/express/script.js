const fs = require("fs");


class Container {
  constructor(fileName) {
    this.fileName = fileName;
  }

  //Generates a random index num considering the objs available
  randomInt(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }
  //Returns info from file
  async getAll(){
    try {
      const contentTxt = await fs.promises.readFile(`${this.fileName}`);
      let content = JSON.parse(contentTxt);
      return content;
    }
    catch(err) {
      return err;
    }
  }

  async getRandom(){
    try {
      const content = await this.getAll();
      let max = content.length - 1;
      let randomIndex = this.randomInt(0, max);
      return content[randomIndex];
    }
    catch(err) {
      return err;
    }
  }
}

module.exports = Container;
/*
const productos = new Container('./products.txt');

(async function(){
  const productosAll = await productos.getAll()
  console.log(productosAll)
  const productoRandom = await productos.getRandom()
  console.log(productoRandom)
})()
*/
