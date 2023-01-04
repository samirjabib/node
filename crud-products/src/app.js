const express = require('express');

const db = require('./utils/database')
const config = require('./config')

const app = express()


db.authenticate()
    .then( () =>  console.ñog('database synced'))
    .catch( (err) =>  console.log(err))

db.sync()
    .then( () => console.log('database synced'))
    .catch( err => console.log(err))



app.use(express.json());



