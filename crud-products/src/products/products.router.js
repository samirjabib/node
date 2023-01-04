const { application } = require('express');

const productsRotuer = require('express').Router();


productsRotuer.get('/products')
productsRotuer.post('/products')

productsRotuer.get('/products/:id')
productsRotuer.patch('/products/:id')
productsRotuer.delete('/products/:id')

module.exports = productsRotuer;