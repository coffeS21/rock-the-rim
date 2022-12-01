import React from 'react'
import Take from './Take.jsx'

export default function TakeList(props){
  const {takes} = props
  return (
    <div >
      {takes.map(take => <Take {...take} key={take._id}/>) }
    </div>
  )
}