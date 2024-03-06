const express = require('express')
const movieRouter = express.Router()
const { v4: uuid } = require('uuid');

const movies = [
    { title: 'die hard', genre: 'action', _id: uuid() },
    { title: 'star wars IV', genre: 'fantasy', _id: uuid() },
    { title: 'lion king', genre: 'fantasy', _id: uuid() },
    { title: 'friday the 13th', genre: 'horror', _id: uuid() }
]

// Get All //
movieRouter.get("/", (req, res) => {
    res.send(movies);
});


// Get One //
movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if (!foundMovie) {
        const error = new Error(`The item with id ${movieId} was not found.`)
        return next(error)
    }
    res.send(foundMovie)
})


// Get by genre
movieRouter.get("/search/genre", (req, res, next) => {
    const genre = req.query.genre
    if (!genre) {
        const error = new Error("You must provide a genre")
        return next(error)
    }
    const filterMovies = movies.filter(movie => movie.genre === genre)
    res.send(filterMovies)
})


// Post One //
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuid()
    movies.push(newMovie)
    res.send(newMovie)
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
    res.send(updatedMovie)
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