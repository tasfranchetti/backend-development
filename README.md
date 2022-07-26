# Backend Development course
CODER HOUSE - Deliverables


================================

## SUMMARY

## Classes

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

### Express

```
$ npm install
$ npm run dev

> express@1.0.0 dev
> nodemon server.js

```

### Router-multer

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
    "title":"Corcho",
    "price":6.0,
    "thumbnail":"https://img.com/"
  }
* DELETE: localhost:8080/api/products/:id

```
