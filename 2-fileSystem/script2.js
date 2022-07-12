const fs = require("fs");


class Container {
  constructor(fileName) {
    this.fileName = fileName;
  }
  async save(obj) {
    try {
      const contentTxt = await fs.readFileSync(`./2-fileSystem/${this.fileName}`, 'utf-8');
      let content = await JSON.parse(contentTxt);

      if (contentTxt == "[]") {
        obj.id = 1;
      } else {
        obj.id = content[content.length - 1].id + 1;
      }

      content.push(obj)
      const newContentTxt = JSON.stringify(content)
      fs.writeFileSync(`./2-fileSystem/${this.fileName}`, newContentTxt)

      return obj.id
    }
    catch(err) {
      return err;
    }
}

  async getById(id){
    try { 
      const contentTxt = await fs.readFileSync(`./2-fileSystem/${this.fileName}`);
      const content = JSON.parse(contentTxt);
      let result = content.find(i => i.id == id);
      if (result == "") {
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
      const contentTxt = await fs.readFileSync(`./2-fileSystem/${this.fileName}`);
      const content = JSON.parse(contentTxt);
      return content;
    }
    catch(err) {
      return err;
    }
  }

  async deleteById(id){
    try {
      const contentTxt = await fs.readFileSync(`./2-fileSystem/${this.fileName}`);
      const content = JSON.parse(contentTxt);
      let index = content.findIndex(i => i.id == id);
      if(index == -1){
        return "The ID searched does not exists";
      } else {
        content.splice(index, 1);
        const newContentTxt = JSON.stringify(content)
        fs.writeFileSync(`./2-fileSystem/${this.fileName}`, newContentTxt)
      }
    }
    catch(err) {
      return err;
    }
    
  }

  async deleteAll(){
    try {
      await fs.writeFileSync(`./2-fileSystem/${this.fileName}`, "[]")
    }
    catch(err) {
      return err;
    }
  
  }
}

const prueba =  {                                                                                                                                                    
  title: 'Cuaderno',                                                                                                                          
  price: 5.50,                                                                                                                                     
  thumbnail: 'https://img.com/',                                                                                                                                             
}   

const productos = new Container('products.txt')
//console.log(productos.save(prueba))
//console.log(productos.getAll())
//console.log(productos.getById(4))
//console.log(productos.deleteById(3))
//console.log(productos.deleteAll())

/* 
//// Synchronous resolution ////
const fs = require("fs");


class Container {
  constructor(fileName) {
    this.fileName = fileName;
  }
  save(obj){
    const contentTxt = await fs.readFileSync(`./2-fileSystem/${this.fileName}`, 'utf-8');
    let content = JSON.parse(contentTxt);

    if (contentTxt == "[]") {
      obj.id = 1;
    } else {
      obj.id = content[content.length - 1].id + 1;
    }

    content.push(obj)
    const newContentTxt = JSON.stringify(content)
    fs.writeFileSync(`./2-fileSystem/${this.fileName}`, newContentTxt)

    return obj.id
  }
  getById(id){
    const contentTxt = fs.readFileSync(`./2-fileSystem/${this.fileName}`);
    const content = JSON.parse(contentTxt);
    let result = content.filter(i => i.id == id);
    if (result == "") {
      return "The ID searched does not exists";
    } else {
      return result[0];
    }
  }
  getAll(){
    const contentTxt = fs.readFileSync(`./2-fileSystem/${this.fileName}`);
    const content = JSON.parse(contentTxt);
    return content;
  }
  deleteById(id){
    const contentTxt = fs.readFileSync(`./2-fileSystem/${this.fileName}`);
    const content = JSON.parse(contentTxt);
    let index = content.findIndex(i => i.id == id);
    if(index == -1){
      return "The ID searched does not exists";
    } else {
      content.splice(index, 1);
      const newContentTxt = JSON.stringify(content)
      fs.writeFileSync(`./2-fileSystem/${this.fileName}`, newContentTxt)
    }
  }

  deleteAll(){
  fs.writeFileSync(`./2-fileSystem/${this.fileName}`, "[]")
  }
}

const prueba =  {                                                                                                                                                    
  title: 'Cuaderno',                                                                                                                          
  price: 5.50,                                                                                                                                     
  thumbnail: 'https://img.com/',                                                                                                                                             
}   

const productos = new Container('products.txt')
//console.log(productos.save(prueba))
//console.log(productos.getAll())
//console.log(productos.getById(4))
//console.log(productos.deleteById(4))
//console.log(productos.deleteAll())
*/


/*

class Container {

  }

  save = async (obj) => {
    try {
      let data = await fs.promises.readFile(
        `./resources/${this.fileName}`,
        "utf-8"
      );

      if (data.length == 0) {
        obj.id = 1;

        // # I create and array first to re-create a JSON file in products.txt
        await fs.promises.writeFile(
          `./resources/${this.fileName}`,
          JSON.stringify(new Array(obj))
        );

        return obj.id;
      } else {
        let fileContent = JSON.parse(data);

        // # Get max id from the array of objects
        let maxId = fileContent.reduce((prev, curr) =>
          prev.id > curr.id ? prev : curr
        );

        // # Assign an id to new object.
        obj.id = Number(maxId.id) + 1;
        // # Push new object to array of objects, now with max id
        fileContent.push(obj);

        await fs.promises.writeFile(
          `./resources/${this.fileName}`,
          JSON.stringify(fileContent)
        );

        return obj.id;
      }
    } catch (err) {
      console.log(err);
    }
  };

  getById = async (id) => {
    try {
      let data = await fs.promises.readFile(
        `./resources/${this.fileName}`,
        "utf-8"
      );
      let content = JSON.parse(data);

      // # Filter the array of object to find the one with the same id
      let value = content.filter((item) => item.id == id);

      // # If there isnt a product with the same id, return null.
      return value.length ? value : null;
    } catch (err) {
      console.log(err);
    }
  };

  getAll = async () => {
    try {
      let data = await fs.promises.readFile(
        `./resources/${this.fileName}`,
        "utf-8"
      );

      return JSON.parse(data);
    } catch (err) {
      console.log(err);
    }
  };

  deleteById = async (id) => {
    try {
      let data = await fs.promises.readFile(
        `./resources/${this.fileName}`,
        "utf-8"
      );
      let content = JSON.parse(data);

      // # Products filtered.
      let contentEdited = content.filter((item) => item.id !== id);

      await fs.promises.writeFile(
        `./resources/${this.fileName}`,
        JSON.stringify(contentEdited)
      );

      console.log(`Product with ${id} has been removed.`);
    } catch (err) {
      console.log(err);
    }
  };

  deleteAll = async () => {
    try {
      await fs.promises.writeFile(`./resources/${this.fileName}`, "");

      console.log("The file is empty.");
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = Container;

let ejemplo = new Container("pepito")

let producto = {
  title: '(nombre del producto)',
  price: '(precio)',
  thumbnail: '(url de la foto del producto)'
}


ejemplo.save(producto)

*/