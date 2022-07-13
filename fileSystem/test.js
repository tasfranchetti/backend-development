/*
Sample products.txt:
[{"title":"Hojas","price":2.50,"thumbnail":"https://img.com/","id":1},{"title":"Cuaderno","price":5.5,"thumbnail":"https://img.com/","id":2},{"title":"Mochila","price":15,"thumbnail":"https://img.com/","id":3},{"title":"Lapicera","price":0.5,"thumbnail":"https://img.com/","id":4}]
*/
const Container = require('./script.js');

const productos = new Container('./products.txt')

const sample =  {                                                                                                                                                    
    title: 'Pincel',                                                                                                                          
    price: 3.25,                                                                                                                                     
    thumbnail: 'https://img.com/',                                                                                                                                             
  }   

//Testing
const testing = async () => {

    const idSample = await productos.save(sample);
    console.log(idSample);
    //Id 5
    const allProducts = await productos.getAll();
    console.log(allProducts);
    //The whole aray
    const search1 = await productos.getById(1);
    console.log(search1);
    //Hojas product
    await productos.deleteById(1);
    //Void since products exists
    const deleteMessage = await productos.deleteById(0);
    console.log(deleteMessage);
    //"The ID searched does not exists"
    const search2 = await productos.getById(1);
    console.log(search2);
    //"The ID searched does not exists"
    await productos.deleteAll();
}

testing();