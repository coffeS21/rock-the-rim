import React, {useContext} from "react"
import TakeForm from "./TakeForm.js"
import TakeList from "./TakeList.js"
import { UserContext } from '../context/UserProvider.js'
import "../styles/takePage.css"
export default function TakePage(){
    const {addTake, takes, upvote} = useContext(UserContext)
    return(
        <div id="takePageContainer">
            
            <div id="takeFomContainer">
            <TakeForm addTake={addTake} />
            </div>
            
             <div className="componentDivs">
            <TakeList listOfTakes={takes} upvote={upvote}/>
            </div> 
            
        </div>
    )
}