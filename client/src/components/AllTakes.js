import React,{useContext} from 'react'
import {UserContext} from "../context/UserProvider.js"

export default function AllTakes(props){
  const {takeTitle, takeBody, user, _id} = props
 console.log(props)
 const {user: {username}} = useContext(UserContext)
    return (
          <div>
              <div>
              <h1>{takeTitle}</h1>
            </div>
            <div>
              <h1>{takeBody}</h1>
            </div>
            <div>
              <button>upvote</button>
              <button>upvote</button>
            </div>
            <div>
              <h6>{username}</h6>
            </div>
            <div>
              <p>{_id}</p>
            </div> 
          </div>
      )

  }
  


