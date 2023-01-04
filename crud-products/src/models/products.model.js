const { Datatypes } = require('sequelize');

const db = require('../utils/database');

const Products = db.define('products', {
    id:{
        primaryKey:true,
        type:Datatypes.UUID,
        allowNull:false,
    },
})