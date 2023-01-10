import React from 'react'
import { Link } from 'react-router-dom'
import Header from "./Header.js"
import "../styles/nav.css"
export default function Navbar(props){
  return (
    <div id="navContainer">
      <div id="profileHeaderContainer">
         <Header header="rock the rim"/>
      </div>

      <div id="linkContainer">
        <Link className="navLikinks" to="/profile">
          <button className="button-30" role="button">profile page</button>
        </Link>
        <Link className="navLikinks" to="/takepage">
          <button className="button-30" role="button">hot take page</button>
        </Link>
        <Link className="navLikinks" to="/public">
          <button className="button-30" role="button">all takes page</button>
        </Link>
        <Link className="navLikinks" to="/commentpage">
          <button className="button-30" role="button">comment page</button>
        </Link>
      </div>
       
    </div>
  )
}



/**
 * - User's should only be able to upvote/downvote once per issue.
 *  (you need to make a put request and pass it to a button and i think its hooked on the back so you dont need to save state)
 * (get help on making sure the user can only upvote once per take)
 * 

- Items will be ordered by upvotes (the most being at the top).
(once you have everything rendering i think you need to do a sort on the take array and sort by props)

Each item should show the total number of votes
(i think once you make the correct put request it should render the new total)
(ask slack about this one)

Users can comment on posts (unlimited number of comments per post)
(you need to make a way for a user to add a comment from a form. 
  kina like the edit video from level5)
  (this needs to be rendered with every take) 

  figure out why all the takes go away on refresh
 */