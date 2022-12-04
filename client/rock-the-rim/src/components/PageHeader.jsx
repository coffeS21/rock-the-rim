import React, {useContext} from "react"
import { UserContext } from '../context/UserProvider.jsx'
export default function PageHeader(props){
    const{
        user:{
            username
        }
    } =useContext(UserContext)
    return(
        <div id="pageHeader">
            <h2>{username} {props.pageHeader}</h2>
        </div>
    )
}