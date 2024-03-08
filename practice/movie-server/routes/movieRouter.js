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
movieRouter.get("/", async(req,res)=>{
    try {
        const foundMovies = await Movie.find({})
        res.status(200).send(foundMovies)
    } catch (err) {
        res.status(500)
        res.json({message:"Error in get Route"})
    }
})




// Get One //
movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if (!foundMovie) {
        const error = new Error(`The item with id ${movieId} was not found.`)
        res.status(500)
        return next(error)
    }
    
    
    res.status(200).send(foundMovie)
})


// Get by genre
movieRouter.get("/search/genre", (req, res, next) => {
    const genre = req.query.genre
    if (!genre) {
        const error = new Error("You must provide a genre")
        res.status(500)
        return next(error)
    }
    const filterMovies = movies.filter(movie => movie.genre === genre)
    res.status(200).send(filterMovies)
})


// Post One //
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuid()
    movies.push(newMovie)
    res.status(201).send(newMovie)
})

clle
movieRouter.post("/newmovie", async(req,res)=>{
    try {
        const newMovie = new Movie(req.body)
        newMovie.save()
        res.status(200).send(newMovie)
    } catch (err) {
        res.status(500)
        res.json({message:"Error in post route"})
    }
})


// Delete One //
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie!")
})


//Update One //
movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.status(201).send(updatedMovie)
})


// movieRouter.route("/")
//     .get((req, res) => {
//         res.send(movies)
//     })
//     .post((req, res) => {
//         const newMovie = req.body
//         newMovie._id = uuid()
//         movies.push(newMovie)
//         res.send(`Successfully added ${newMovie.title} to the database!`)
//     })



module.exports = movieRouter