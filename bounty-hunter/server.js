const express = require('express')
const app = express()


app.use(express.json())


app.use("/bounty", require("./routes/bountyRouter.js"))


app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


app.listen(7005, () => {
    console.log('server is running on port 7005')
})