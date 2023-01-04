const uuid = require("uuid");

const Products = require('../models/products.model');

const getAllProducts = async() => {
    const products = await Products.findAll();

    return products;
}


const createProducts = async(data) => {
    const newProduct = Products.create({
        id:uuid.v4(),
        ...data
    });

    return newProduct;
};


const getProductById = async(id) => {
    const product = await Products.findOne({
        where:{
            id:id,
        }
    });

    return product;
};

const updateProduct = async(id, data) => {
    const {name, category, price, isAvailable } = data;

    const product = await Products.update({
        name,
        category,
        price,
        isAvailable,
    },{
        where:id,
    })

    return product;
};

const deleteProduct = async(id) => {
     await Products.destroy({
        where:{
            id:id,
        }
    })
};


module.exports = {
    getAllProducts,
    createProducts,
    getProductById,
    updateProduct,
    deleteProduct
};