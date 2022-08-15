class Messages {
    constructor() {
      this.storedData = [];
    }
  
    save(message) {
      try {
        if (this.storedData.length === 0) {
            message.id = 1;
        } else {
            message.id = this.storedData[this.storedData.length - 1].id + 1;
        }
        this.storedData.push(message)
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
  
  module.exports = Messages;
  