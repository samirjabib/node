const express = require("express")



const tracksRouter = express.Router();

const data = ["hello", "wrld"]

tracksRouter.get("/", (req, res) => {
    res.send({data})
})


module.exports = { tracksRouter }