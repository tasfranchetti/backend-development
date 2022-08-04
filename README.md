# Backend Development course
CODER HOUSE - Course deliverables

This is a compilation of all projects developed during my course. 

The names of each section corresponds to it's directory name and is linked to the tool or concept we were learning on such session.


============================================


## SUMMARY

## Classes
tasfranchetti/backend-development/classes

We preacticed class creation.

```
$ npm install
$ npm run dev

> classes@1.0.0 dev
> node test.js

Pepe Argento
1
[ 'El libro de la buena memoria' ]
```

## File System
tasfranchetti/backend-development/fileSystem

We practiced how to store information from the previous class methods on static files.

```
$ npm install
$ npm run start

> file-system@1.0.1 
> node test.js

Results from test excecution:

5
[
  { 
    title: 'Hojas', 
    price: 2.5, 
    thumbnail: 'https://img.com/', 
    id: 1 
  },
  {
    title: 'Cuaderno',
    price: 5.5,
    thumbnail: 'https://img.com/',
    id: 2
  },
  { 
    title: 'Mochila', 
    price: 15, 
    thumbnail: 'https://img.com/', 
    id: 3 },
  {
    title: 'Lapicera',
    price: 0.5,
    thumbnail: 'https://img.com/',
    id: 4
  },
  {
    title: 'Pincel',
    price: 3.25,
    thumbnail: 'https://img.com/',
    id: 5
  }
]
{ title: 'Hojas', price: 2.5, thumbnail: 'https://img.com/', id: 1 }
The ID searched does not exists
The ID searched does not exists

```

## Web Server
tasfranchetti/backend-development/webServer

Using the clases previously created we now generated an API that consumes the methods of the class.

### Express
./express

```
$ npm install
$ npm run dev

> express@1.0.0 dev
> nodemon server.js

```

### Router-multer
./router-multer

```
$ npm install
$ npm run dev

> express@1.0.4 dev
> nodemon server.js

- API testing with Postman - 
Endpoints:

* GET: localhost:8080/api/products/ (gets all the products)
* GET: localhost:8080/api/products/:id (gets that product)
* POST: localhost:8080/api/products/ (creates a product)
  Example Body (Raw - JSON)
  {
    "title":"Cuaderno",
    "price":6.0,
    "thumbnail":"https://img.com/"
  }
* PUT: localhost:8080/api/products/:id (updates that product)
  Example Body (Raw - JSON)
  {
    "title":"Cuaderno",
    "price":6.0,
    "thumbnail":"https://img.com/"
  }
* DELETE: localhost:8080/api/products/:id (deletes that product)

```

## Template engines and API
tasfranchetti/backend-development/templateEngine

```
1- The API created in the previous challenge remains testable with Postman
Endpoints:
* GET: localhost:8080/api/index (gets the index)
* GET: localhost:8080/api/products (gets all the products)
* GET: localhost:8080/api/:id (gets that product)
* POST: localhost:8080/api/ (creates a product)
  Example Body (Raw - JSON)
  {
    "title":"Cuaderno",
    "price":6.0,
    "thumbnail":"https://img.com/"
  }
* PUT: localhost:8080/api/:id (updates that product)
  Example Body (Raw - JSON)
  {
    "title":"Cuaderno",
    "price":6.0,
    "thumbnail":"https://img.com/"
  }
* DELETE: localhost:8080/api/products/:id (deletes that product)

```
```
2- Three different template engines were implemented along with CSS

```
### EJS
./ejs

### Handlebars
./handlebars

### Pug
./pug


