import React, { useState } from 'react'
import BountyForm from './BountyForm'


function Bounty(props){
    const { name, living, bounty, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="bounty">
            { !editToggle ?
            <>
                <h1>Title: { name }</h1>
                <h3>living: { living }</h3>
                <h3>bounty: { bounty }</h3>
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
                    _id={_id}
                    btnText="Submit Edit"
                    submit={props.editBounty}
                />
                <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Close
                </button>
                </>
            }      
        </div>
    )
}

export default Bounty 