import React from "react"

export default function Comment(props){
    const {comment} = props
    console.log(props)
    return(
        <div>
            <h1>{comment}</h1>
            <h1>{props.take}</h1>
        </div>
    )
}
