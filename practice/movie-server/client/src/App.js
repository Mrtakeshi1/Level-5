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

    function editMovie(updates, movieId) {
        axios.put(`/movies/${movieId}`, updates)
         .then(res => {
             setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
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
                    submit={addMovie}
                    btnText="Add Movie"
                />
                { 
                movies.map(movie => 
                    <Movie 
                        {...movie} 
                        key={movie.title}
                        deleteMovie={deleteMovie}
                        editMovie={editMovie}
                    />) 
                }
            </div>
        </div>
    )
}

export default App;