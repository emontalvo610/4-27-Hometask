# Node.js backend for the Chrome Extension


## Description
This  Node.js backend stores product logs to PostgresDB.
The Chrome Extension is going to send out API requests to record product information logs.

## Tech Stacks
- Node.js
- Sequelize
- Postgres

## APIs
- GET     `api/products`	            get all Products
- POST     `api/products`           create product log1


## Database Models
- Product
   name: Product 


##Front-end that works well with this Back-end
> [Axios Client](https://www.bezkoder.com/axios-request/)

> [Angular 8](https://www.bezkoder.com/angular-crud-app/) / [Angular 10](https://www.bezkoder.com/angular-10-crud-app/) / [Angular 11](https://www.bezkoder.com/angular-11-crud-app/) / [Angular 12](https://www.bezkoder.com/angular-12-crud-app/) / [Angular 13](https://www.bezkoder.com/angular-13-crud-example/) / [Angular 14](https://www.bezkoder.com/angular-14-crud-example/) / [Angular 15](https://www.bezkoder.com/angular-15-crud-example/) / [Angular 16](https://www.bezkoder.com/angular-16-crud-example/) / [Angular 17](https://www.bezkoder.com/angular-17-crud-example/)

> [Vue 2 Client](https://www.bezkoder.com/vue-js-crud-app/) / [Vue 3 Client](https://www.bezkoder.com/vue-3-crud/) / [Vuetify Client](https://www.bezkoder.com/vuetify-data-table-example/)

> [React Client](https://www.bezkoder.com/react-crud-web-api/) / [React Redux Client](https://www.bezkoder.com/react-redux-crud-example/)

### Test the APIs
Run our Node.js application with command: `node server.js`.

Using Postman, we're gonna test all the Apis above.

- Create a new Tutorial using `POST /products` Api


After creating some new Tutorials, you can check PostgreSQL table:
```testdb=# select * from tutorials;
 id |    name    |    image    |         createdAt          |         updatedAt
----+-------------+-------------------+-----------+----------------------------+----------------------------
  1 | Pitsa       | https://wteberify.com/products/Pitsa/info.jpg  |       | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07
  2 | Spaghetti   | https://wteberify.com/products/Spaghetti/info.jpg  |       | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07
  3 | Pitsa       | https://wteberify.com/products/Pitsa/info.jpg  |       | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07
  4 | Pitsa       | https://wteberify.com/products/Pitsa/info.jpg  |       | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07
  5 | Pitsa       | https://wteberify.com/products/Pitsa/info.jpg  |       | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07

```

## Project setup
```
npm install
```

### Run
```
node server.js
```
