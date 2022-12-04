import React from "react"
import TakeForm from "./TakeForm"
import TakeList from "./TakeList"
export default function TakePage(){
    return(
        <div id="takePageContainer">
            
            <div className="componentDivs">
            <TakeForm/>
            </div>
            
            <div className="componentDivs">
            <TakeList/>
            </div>
            
        </div>
    )
}