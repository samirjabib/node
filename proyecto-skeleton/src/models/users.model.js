const express = require("express")
const { restart } = require("nodemon")








const app = express()

app.use(express.json())


app.get('/',(req, res) => {
    res.status(200).json({
        message:'OK',
        users:`localhost:${port}/api/v1/users`
    })
})




app.listen(8000, () => {
    console.log(`Server started at port ${port}`)
})