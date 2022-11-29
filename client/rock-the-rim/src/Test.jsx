import React, {useContext} from "react"
import { UserContext } from "./context/UserProvider"


export default function(){
    const nameData = useContext(UserContext)
    return(
        <>
        <h1>{nameData.name}</h1>
        </>
    )
}