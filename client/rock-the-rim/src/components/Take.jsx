import React from 'react'

export default function Todo(props){
  const { title, _id } = props
  return (
    <div>
      <h1>{ title }</h1>
    </div>
  )
}