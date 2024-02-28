const express = require('express')
const app = express()


app.use(express.json())


app.use("/bounty", require("./routes/bountyRouter.js"))


app.listen(7000, () => {
    console.log('server is running on port 7000')
})