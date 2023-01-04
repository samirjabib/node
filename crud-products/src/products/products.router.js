const { createProducts, deleteProduct, getAllProducts, getProductById, updateProduct} = require('./products.services')

const productsRotuer = require('express').Router();



productsRotuer.get('/products', getAllProducts)
productsRotuer.post('/products', createProducts)

productsRotuer.get('/products/:id', getProductById)
productsRotuer.patch('/products/:id', updateProduct)
productsRotuer.delete('/products/:id', deleteProduct)

module.exports = productsRotuer;