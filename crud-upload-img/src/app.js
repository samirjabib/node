const express = require('express')
const config = require('./config')
const db = require('./utils/database');
const initModels = require('./models/initModel')



const app = express()



db.authenticate()
    .then( () => console.log('db authenticate'))
    .catch( (err) => console.log(err))

db.sync()
    .catch( () => console.log('db sync'))
    .catch( (err) => console.log(err))

initModels()

app.use(express.json())


app.listen(config.port, () => {
    console.log(`Sever stared on ${config.port}`)
})