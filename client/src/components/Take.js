 import React from "react"



export default function Take(props){
  const {takeTitle, takeBody} = props
  
  return (
    <div>
        <h1>{takeTitle}</h1>
        <h3>{takeBody}</h3>
        <button>upvote</button>    
    </div>
     
      