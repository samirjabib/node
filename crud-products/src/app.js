const express = require('express');

const db = require('./utils/database')
const initModels = require('./models/initModel');
const productsRotuer = require('./products/products.router');

const app = express()

initModels(),




db.authenticate()
    .then( () =>  console.log('database synced'))
    .catch( (err) =>  console.log(err))

db.sync()
    .then( () => console.log('database synced'))
    .catch( err => console.log(err))


app.use('/movies', productsRotuer)


app.use(express.json());



