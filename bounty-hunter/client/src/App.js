import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty.js'
import BountyForm from './components/BountyForm.js'
import './App.css'


function App() {
  const[bounty, setBounty] = useState([])

  function getBounty() {
      axios.get("/bounty")
      .then(res => setBounty(res.data))
      .catch(err => console.error(err))
  }

  function addBounty(newBounty) {
      axios.post("/bounty", newBounty)
          .then(res => {
              setBounty(prevBounty => [...prevBounty, res.data]);
          })
          .catch(err => console.error(err))
  }

  function deleteBounty(bountyId) {
      axios.delete(`/bounty/${bountyId}`)
      .then(res => {
          setBounty(prevBounty => prevBounty.filter(bounty => bounty._id !== bountyId));
      })
      .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId) {
      axios.put(`/bounty/${bountyId}`, updates)
       .then(res => {
           setBounty(prevbounty => prevbounty.map(bounty => bounty._id !== bountyId ? bounty : res.data))
          })
          .catch(err => console.log(err))
  }

  useEffect(() => {
      getBounty()
  }, [])

  return (
      <div>
          <div className="bounty-container">
              <BountyForm
                  submit={addBounty}
                  btnText="Add Bounty"
              />
              { 
              bounty.map(bounty => 
                  <Bounty
                      {...bounty} 
                      key={bounty.name}
                      deleteBounty={deleteBounty}
                      editBounty={editBounty}
                  />) 
              }
          </div>
      </div>
  )
}

export default App;