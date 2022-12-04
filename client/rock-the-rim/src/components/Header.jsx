import React from "react"
import "../../styles/auth.css"
export default function Header(props){
    return(
        <div id="header">
            <h1>{props.header}</h1>
        </div>
    )
}