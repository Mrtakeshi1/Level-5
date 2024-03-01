const express = require('express')
const app = express()


app.use(express.json())


app.use("/chores", require("./routes/todoListRouter.js"))


app.listen(6666, () => {
    console.log('server is running on port 6666')
})