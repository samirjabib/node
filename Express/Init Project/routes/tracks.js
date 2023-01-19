const express = require("express")
const router = express.Router();


router.get("/tracks", (req, res) => {

    const data = ["hello", "world"]
    res.send({data});
} )

module.exports = router;