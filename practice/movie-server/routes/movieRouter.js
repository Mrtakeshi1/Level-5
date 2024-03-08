const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie')



// Get All //
// Before mongoose 7.0
// movieRouter.get("/", (req, res, next) => {
//     Movie.find((err, movies) => {
//         if(err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.send(200).send(movies)
//     }) 
// })


// After Mongoose 7.0
movieRouter.get("/", async(req, res, next)=>{
    try {
        const foundMovies = await Movie.find({})
        res.status(200).send(foundMovies)
    } catch (err) {
        res.status(500).json({ errMsg: err.message })
        return next(err)
    }
})


// Get One //
movieRouter.get("/:movieId", async (req, res, next) => {
    try {
        const movieId = req.params.movieId;
        const foundMovie = await Movie.findById(movieId);
        if (!foundMovie) {
            res.status(404).json({ errMsg: "Movie not found." });
        } else {
            res.status(200).send(foundMovie);
        }
    } catch (err) {
        if (err.name === 'CastError') {
            // Handle invalid movie ID
            res.status(404).json({ errMsg: "Movie not found." });
        } else {
            // Handle other errors
            res.status(500).json({ errMsg: err.message });
        }
    }
});


// Get by genre
movieRouter.get("/search/genre", async (req, res, next) => {
    try {
        const genre = req.query.genre
        if (!genre) {
            const err = new Error("You must provide a genre")
            res.status(400)
            return next(err)
        }
        const filterMovies = await Movie.find({ genre: genre })
        res.status(200).send(filterMovies)
    } catch (err) {
        res.status(500).json({errMsg: err.message})
    }
})


 // Post One //
movieRouter.post("/", async (req, res, next) => {
    try {
        const newMovie = new Movie (req.body)
        await newMovie.save()
        res.status(201).send(newMovie)
    } catch (err) {
        res.status(500).json({ errMsg: err.message })
    }
})


// Delete One //
movieRouter.delete("/:movieId", async (req, res, next) => {
    try {
        const movieId = req.params.movieId;
        const deletedMovie = await Movie.findByIdAndDelete(movieId);
        if (!deletedMovie) {
            res.status(200).send(`Successfully deleted item ${deletedMovie.title} from database!`);
         } else {
            res.status(404).send("Movie not found")
          }  
        
    } catch (err) {
        if (err.name === 'CastError') {
            // Handle invalid movie ID
            res.status(404).send("Movie not found.");
        } else {
            // Handle other errors
            res.status(500).json({ errMsg: err.message });
        }
    }
});


//Update One //
movieRouter.put("/:movieId", async (req, res, next) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.movieId, req.body, { new: true })
        if (!updatedMovie) {
            res.status(404).send("Movie not found.")
        } else {
            res.status(200).send(updatedMovie)
        }
    } catch (err) {
        res.status(500).json({ errMsg: err.message })
    }
})




module.exports = movieRouter