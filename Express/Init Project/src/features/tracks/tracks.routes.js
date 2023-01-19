const express = require("express")

const {
    getItems,
    getItem,
    postItems,
    updateItems,
    deleteItems
} = require("./tracks.controller");



const tracksRouter = express.Router();

const data = ["hello", "wrld"]

tracksRouter.get("/", getItems)


module.exports = { tracksRouter }