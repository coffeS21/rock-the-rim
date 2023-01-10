import React ,{useContext} from "react"
import CommentList from "./CommentList"
import { UserContext } from '../context/UserProvider.js'
import "../styles/commentPage.css"
export default function CommentPage(props){
    console.log(props)
    const {comments} = useContext(UserContext)
    return(
        <div id="commentPageContainer">
            <div >
            <CommentList listOfComments={comments}/>
            </div>
            
        </div>
    )
}