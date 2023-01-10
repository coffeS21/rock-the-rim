import React from 'react'
import Comment from './Comment.js'

export default function CommentList(props){
  const {listOfComments} = props
   
  const mapped = listOfComments.map(comment => <Comment{...comment}  key={comment._id} />)
  return (
    <div >
        <h1>{mapped}</h1>
    </div>
  )
}