const express = require('express')
const app = express()
const { v4: uuid } = require('uuid')


app.use(express.json())


app.use("/items", (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED ")
    next()
})


app.use("/items", (req, res, next) => {
    req.body = { name: "Rick" }
    next()
})


app.get('/items', (req, res, next) => {
    console.log("GET REQUEST RECEIVED")
    res.send(req.body)
})


app.listen(5000, () => {
    console.log("Server listening on port 5000")
})