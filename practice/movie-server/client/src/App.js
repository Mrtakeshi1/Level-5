import React, { useState, useEffect } from "react"
import axios from 'axios'
import Movie from './components/Movie.js'
import AddMovieForm from './components/AddMovieForm.js'
// eslint-disable-next-line
import styles from './styles.css';



function App() {
    const[movies, setMovies] = useState([])

    function getMovies() {
        axios.get("/movies")
        .then(res => setMovies(res.data))
        .catch(err => console.error(err))
    }

    function addMovie(newMovie) {
        axios.post("/movies", newMovie)
            .then(res => {
                setMovies(prevMovies => [...prevMovies, res.data]);
            })
            .catch(err => console.error(err))
    }

    function deleteMovie(movieId) {
        axios.delete(`/movies/${movieId}`)
        .then(res => {
            setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId));
        })
        .catch(err => console.log(err))
    }


    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
            <div className="movie-container">
                <AddMovieForm 
                    addMovie={addMovie}
                />
                { 
                movies.map(movie => 
                    <Movie 
                        {...movie} 
                        key={movie.title}
                        deleteMovie={deleteMovie}
                    />) 
                }
            </div>
        </div>
    )
}

export default App;