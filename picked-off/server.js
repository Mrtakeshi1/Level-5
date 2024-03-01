const express = require('express');
const itemsMiddleware = require('./routes/middleware');
const app = express();


app.use(express.json());


app.use("/items", itemsMiddleware);


// app.use("/items", (req, res, next) => {
//     req.body = { name: "Darth Vader" };
//     next();
// });


// app.get('/items', (req, res, next) => {
//     console.log("GET REQUEST RECEIVED");
//     res.send(req.body);
// });


function modifyItems (req, res, next) {
    req.body = { name: "Darth Vader" };
    next();
}





app.get('/items', modifyItems, (req, res, next) => {
    console.log("GET REQUEST RECEIVED");
    const items = [
        { name: "Item 1" },
        { name: "Item 2" },
        { name: "Item 3" }
    ];
    res.send({ items, modifiedBody: req.body });
});


app.listen(4000, () => {
    console.log("Server listening on port 4000")
})