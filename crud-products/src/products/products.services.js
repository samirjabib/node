const productControllers = require('./products.controller')


const getAllProducts = async(req, res) => {
    try {
        const products = productControllers.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}


const createProducts = async(req, res) => {
    const data = req.body

    if (data.name && data.category && data.price && isAvailable) {
        try {
            const newProduct = await createProducts(data);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(400).json({message:error.message});
        };
    } else {
        res.status(404).json({message:'data incompleted'});
    };
}


const getProductById = async(req, res) => {
    const id = req.params.id

    if (id) {
        try {
            const product = await getProductById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({message:error.message});
        }
    } else {
        res.status(404).json({message:'incorrect id'})
    };
};


const updateProduct = async(req, res) => {
    const id = req.params.id;
    const data = req.body;

    if (id && data) {
        try {
            await productControllers.updateProduct(id, data)
        
        res.status(200).json({
            message:`Movie with ${id}, edited succesfuly`
            });
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    } else {
        res.status(404).json({message:'invalid id & data'});
    };
;}

const deleteProduct = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getAllProducts,
    createProducts,
    getProductById,
    deleteProduct,
    updateProduct
}