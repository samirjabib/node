const { tracksModel } = require("../../models")
const { findOne } = require("../../models/users.model")


const getItems = async(body) => {

}

const getItem = async(body) => {

}

const postItems = async(body) => {
    const data = await findOne({})

    return data
}


module.exports = {
    getItems
}