const express = require('express');
const productRouter = require('./classes/router');
const app = express();
const PORT = 8080;

const productStorage = async () => {
  const storage = await container.readFile();
  return storage || [];
}

//The app is able to receive json and urlencoded
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//static files usage
app.use(express.static("public"));
 
app.use('/api/products', productRouter);

const server = app.listen(PORT, (req, res)=>{
    console.log(`Server listening on port: ${PORT}`)
})
server.on('error', error => console.log(`Error: ${error}`))

