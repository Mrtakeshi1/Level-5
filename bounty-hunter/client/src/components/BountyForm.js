import React, { useState } from 'react'

function BountyForm(props) {
    const initInputs = { 
    name: props.name || "", 
    living: props.living || "",
    bounty: props.bounty || ""
    }
const [inputs, setInputs] = useState(initInputs)

function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

function handleSubmit(e) {
    e.preventDefault()
    props.submit(inputs, props._id)
    setInputs(initInputs)
    }

return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="name" 
            value={inputs.name} 
            onChange={handleChange} 
            placeholder="Name"/>

        <input 
            type="text" 
            name="living" 
            value={inputs.living} 
            onChange={handleChange} 
            placeholder="Living"/>

        <input 
            type="text" 
            name="bounty" 
            value={inputs.bounty} 
            onChange={handleChange} 
            placeholder="Bounty"/>

        <button>{ props.btnText }</button>

    </form>
    )
}


export default BountyForm