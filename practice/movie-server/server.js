const express = require('express');
const app = express();


// Middleware (for every request) //
app.use(express.json()) // Looks for a request body, and turns it into 'req.body'


// Routes //
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))



// Server Listen //
app.listen(8000, () => {
    console.log('The server is running on Port 8000');
})