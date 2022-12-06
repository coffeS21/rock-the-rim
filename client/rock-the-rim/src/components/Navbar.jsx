import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/auth.css"
export default function Navbar(props){
  return (
    <div id="navContainer">
      <div className="navButton">
        <Link to="/profile">
          <button className="button-30" role="button">My Profile</button>
        </Link>
      </div>
      
      <div className="navButton">
        <Link className="navLikinks" to="/public">
          <button className="button-30" role="button">All takes</button>
        </Link>
      </div>
    </div>
  )
}