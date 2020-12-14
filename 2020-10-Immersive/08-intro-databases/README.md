# Agenda

- Warmup
- Discuss plans for backend project
- Organizing into Routers and Controllers
- Introduction to SQL Databases
    - Confirm ElephantSQL signup
    - How to hide username/password from git with `dotenv`
    - First steps with Sequelize
    - Saving data form data into the database
    - Retrieving data from the database
- *Creating and merging feature branches

## Using `Sequelize` and ElephantSQL (different from Learning Portal)

- No need to `db:create`

## Using `Sequelize` and `dotenv`

Install `dotenv`

```sh
npm i dotenv
```

Create a `.env` file (**NO SPACES!!!**)
```sh
DB_USER=paste_from_elephantsql
DB_PASSWORD=paste_from_elephantsql
DB_NAME=paste_from_elephantsql
DB_HOST=paste_from_elephantsql
```


Create a `.sequelizerc`
```js
const path = require('path')

module.exports = {
  'config': path.resolve('server/config', 'config.js'),
  'models-path': path.resolve('server', 'models'),
  'seeders-path': path.resolve('server', 'seeders'),
  'migrations-path': path.resolve('server', 'migrations')
}
```

Create a `server/config/config.js`

```js
require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
}
```

## What is CRUD?

- Create
- Retrieve
- Update
- Delete