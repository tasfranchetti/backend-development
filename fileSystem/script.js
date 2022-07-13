const fs = require("fs");


class Container {
  constructor(fileName) {
    this.fileName = fileName;
  }

  readFile() {
    const contentTxt = fs.readFileSync(`${this.fileName}`);
    let content = JSON.parse(contentTxt);
    return content;
  }

  async save(product) {
    try {
      let content = this.readFile()

      if (content == "") {
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

  async getById(id){
    try { 
      let content = this.readFile()
      let result = content.find(i => i.id == id);
      if (!result) {
        return "The ID searched does not exists";
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
      let content = this.readFile()
      return content;
    }
    catch(err) {
      return err;
    }
  }

  async deleteById(id){
    try {
      let content = this.readFile()
      let index = content.findIndex(i => i.id == id);
      if(index == -1){
        return "The ID searched does not exists";
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

