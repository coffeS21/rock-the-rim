import React from 'react'
import "../styles/auth.css"
import PageHeader from './PageHeader.js'
import Take from './Take.js'

export default function TakeList(props){
  const {listOfTakes, upvote} = props

 


 
  const mapped = listOfTakes.map(take => 
                                <Take{...take} 
                                key={take._id}
                                upvote={upvote}
                                 />)
  return (
    <div id="takeListContainer">
      <div className="takePageHeader">
        <PageHeader pageHeader="my takes"/>
      </div>
        <div>{mapped}</div>
    </div>
  )
}


