import React from "react"
import Auth from "./components/Auth.jsx"


export default function(){
    const nameData = useContext(UserContext)
    return(
        <>
        <Auth/>
        </>
    )
}