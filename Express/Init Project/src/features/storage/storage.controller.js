const storageServices = require('./storage.services')


const postItems = (req, res) => {
    const data = storageServices.postItems
    res.send({data});
}



module.exports = {
    postItems
}