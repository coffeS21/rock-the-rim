import React, {useContext} from 'react'
import AllTakesList from "./AllTakesList.js"
import {UserContext} from "../context/UserProvider.js"

export default function Public(){
  const {allTakes} = useContext(UserContext)
  return (
    <div>
        <AllTakesList alltakes={allTakes}/>
    </div>
  )
}