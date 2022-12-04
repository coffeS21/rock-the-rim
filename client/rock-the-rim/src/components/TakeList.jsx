import React from 'react'
import "../../styles/auth.css"
import PageHeader from './PageHeader.jsx'
// import Take from './Take.jsx'

export default function TakeList(){
  return (
    <div id="takeListContainer">
      <div className="takePageHeader">
        <PageHeader pageHeader="old takes"/>
      </div>
    </div>
  )
}