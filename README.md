# Backend Development course
CODER HOUSE - Course deliverables

This is a compilation of all projects developed during my course. 

The names of each section corresponds to it's directory name and is linked to the tool or concept we were learning on such session.


============================================


## SUMMARY

## Classes
tasfranchetti/backend-development/classes

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

```
$ npm install
$ npm run start

> file-system@1.0.1 
> node test.js

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

* GET: localhost:8080/api/products/
* GET: localhost:8080/api/products/:id
* POST: localhost:8080/api/products/
* PUT: localhost:8080/api/products/:id
  Body (Raw - JSON)
  {
    "title":"Cuaderno",
    "price":6.0,
    "thumbnail":"https://img.com/"
  }
* DELETE: localhost:8080/api/products/:id

```

## Template engines and API
tasfranchetti/backend-development/templateEngine

```
- each API remains testable with Postman - 
Endpoints:
* GET: localhost:8080/api/index
* GET: localhost:8080/api/products
* GET: localhost:8080/api/:id
* POST: localhost:8080/api/
* PUT: localhost:8080/api/:id
  Body (Raw - JSON)
  {
    "title":"Cuaderno",
    "price":6.0,
    "thumbnail":"https://img.com/"
  }
* DELETE: localhost:8080/api/products/:id

```

### EJS
./ejs

```
$ npm install
$ npm run dev

> express@1.0.4 dev
> nodemon server.js

```

### Handlebars
./handlebars

###Pug
./pug

```
$ npm install
$ npm run dev

> express@1.0.4 dev
> nodemon server.js

```
