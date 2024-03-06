import React, { useState } from 'react'
import BountyForm from './BountyForm'


function Bounty(props){
    const { name, living, bounty, type, _id } = props
    const [editToggle, setEditToggle] = useState(false)


    return (
        <div className="bounty">
            { !editToggle ?
            <>
                <h1>Name: { name }</h1>
                <h3>Living: { living ? "Alive" : "Dead" }</h3>
                <h3>Bounty: { bounty }</h3>
                <h3>Type: { type }</h3>
                <button 
                    className="delete-btn"
                    onClick={() => props.deleteBounty(_id)}>
                    Delete
                </button>
                <button 
                    className="edit-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button>
            </>
            :
            <>
                <BountyForm
                    name= {name}
                    living= {living}
                    bounty = {bounty}
                    type = {type}
                    _id={_id}
                    btnText="Submit Edit"
                    submit={props.editBounty}
                />
                <button
                    className="close-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Close
                </button>
                </>
            }      
        </div>
    )
}

export default Bounty 