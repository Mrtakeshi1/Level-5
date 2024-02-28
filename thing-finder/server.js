const express = require("express");
const app = express();


app.use(express.json());

app.use("/item", require("./routes/inventoryRouter"))


app.listen(6000, () => {
    console.log('The server is running on Port 6000')
})