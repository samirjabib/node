const express = require("express")
const { tracksRouter } = require("../features/tracks/tracks.routes")


const router = express.Router()

router.use('/tracks', tracksRouter)


module.exports = { router }