import React, { useState } from 'react'

function AddMovieFrom(props) {
    const initInputs = { title: "", genre: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.addMovie(inputs)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="title" 
            value={inputs.title} 
            onChange={handleChange} 
            placeholder="Title"/>
            <input 
            type="text" 
            name="genre" 
            value={inputs.genre} 
            onChange={handleChange} 
            placeholder="Genre"/>
            <button>Add Movie</button>
        </form>
    )
}


export default AddMovieFrom