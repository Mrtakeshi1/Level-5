const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))


mongoose.connect('mongodb+srv://garciatakeshi:Mr.takes9308@cluster0.p9vr3vv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
console.log('Connected to DB')
)


app.use("/bounty", require("./routes/bountyRouter.js"))


app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


app.listen(7005, () => {
    console.log('server is running on port 7005')
})