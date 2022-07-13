const fs = require("fs");


module.exports = class Container {
  constructor(fileName) {
    this.fileName = fileName;
  }
  async getAll(){
    try {
      const contentTxt = await fs.promises.readFileSync(`./2-fileSystem/${this.fileName}`);
      const content = JSON.parse(contentTxt);
      return content;
    }
    catch(err) {
      return err;
    }
  }

  async getRandom(){
    try {
      const contentTxt = await fs.promises.readFileSync(`./2-fileSystem/${this.fileName}`);
      const content = JSON.parse(contentTxt);
      let max = content.length
      function randomInt(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
      }
      let randomIndex = randomInt(0,max)
      return content[randomIndex];
    }
    catch(err) {
      return err;
    }
  }
}

