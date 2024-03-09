const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const inventoryRoutes = require('./routes/inventory')


// Middleware (for every request) //
app.use(express.json()) // Looks for a request body, and turns it into 'req.body'
app.use(morgan('dev')) // Logs requests to the console.


// Connect to DB //
mongoose.connect('mongodb+srv://garciatakeshi:Mr.takes9308@cluster0.p9vr3vv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
console.log('Connected to DB')
)


// Routes //
app.use('/inventory', inventoryRoutes);


// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


// Server Listen //
app.listen(6666, () => {
    console.log('The server is running on Port 6666');
})