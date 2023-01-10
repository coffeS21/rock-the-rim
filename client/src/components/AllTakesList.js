import React from "react"
import AllTakes from "./AllTakes.js"
import "../styles/auth.css"

export default function AllTakesList(props){
    const {alltakes} = props
    const mapped = alltakes.map(take => <AllTakes {...take} key={take._id}/> )
    return(
        <div id="takeListContainer">
            {mapped}
        </div>
    )
}