const { triggerAsyncId } = require("async_hooks");
const fs = require("fs");


class Container {
  constructor(fileName) {
    this.fileName = fileName;
  }
  async loadFile() {
    try {
      const content = '[{"title":"Hojas","price":2.50,"thumbnail":"https://img.com/","id":1},{"title":"Cuaderno","price":5.5,"thumbnail":"https://img.com/","id":2},{"title":"Mochila","price":15,"thumbnail":"https://img.com/","id":3},{"title":"Lapicera","price":0.5,"thumbnail":"https://img.com/","id":4}]'
      await fs.promises.writeFile(this.fileName, content);
    } catch(err) {
      return "Error loading txt content, please try again";
    }
  }

  async readFile() {
    try {
      const contentTxt = await fs.promises.readFile(`${this.fileName}`);
      let content = JSON.parse(contentTxt);
      return content;
    } catch(err){
      await fs.promises.writeFile(this.fileName, JSON.stringify([]));
      return [];
    }
  }

  async save(product) {
    try {
      let content = await this.readFile()

      if (content.length == 0) {
        product.id = 1;
      } else {
        product.id = content[content.length - 1].id + 1;
      }

      content.push(product)
      const newContentTxt = JSON.stringify(content)
      await fs.promises.writeFile(`${this.fileName}`, newContentTxt)

      return product.id
    }
    catch(err) {
      return err;
    }
  }

  async updateByID(id, product) {
    try {
      const content = await this.readFile()
      const result = content.find(i => i.id == id);
      if (!result) {
        return {error : 'producto no encontrado'};
      } else {
        const updatedContent = content.map(obj =>{
          if (obj.id == id) {
            return {...product, id: id} 
          }
        })
        const newContentTxt = JSON.stringify(updatedContent)
        await fs.promises.writeFile(`${this.fileName}`, newContentTxt)
        return "Product updated";
      }      
    }
    catch(err) {
      return err;
    }
  }

  async getById(id){
    try { 
      let content = await this.readFile()
      let result = content.find(i => i.id == id);
      if (!result) {
        return { error : 'producto no encontrado'};
      } else {
        return result;
      }
    }
    catch(err){
      return err;
    }
  }

  async getAll(){
    try {
      let content = await this.readFile()
      return content;
    }
    catch(err) {
      return err;
    }
  }

  async deleteById(id){
    try {
      let content = await this.readFile()
      let index = content.findIndex(i => i.id == id);
      if(index == -1){
        return {error: 'producto no encontrado'};
      } else {
        content.splice(index, 1);
        const newContentTxt = JSON.stringify(content)
        await fs.promises.writeFile(`${this.fileName}`, newContentTxt)
      }
    }
    catch(err) {
      return err;
    }
    
  }

  async deleteAll(){
    try {
      await fs.promises.writeFile(`${this.fileName}`, "[]")
    }
    catch(err) {
      return err;
    }
  
  }
}

module.exports = Container;

