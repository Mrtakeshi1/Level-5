const express = require("express")
const app = express()

// Fake Data
const users = [
    {name: "Joe", age: 20},
    {name: "Moe", age: 22},
    {name: "Betty", age: 24},
    {name: "Sarah", age: 26},
    {name: "Mike", age: 28}
]

app.get("/users", (req, res) => {
    res.send(users)
})


        // 1: Port   2: CB
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
}) 