import React, {useState,useContext} from "react"
import "../styles/auth.css"
import PageHeader from './PageHeader.js'
import { UserContext } from "../context/UserProvider.js"

const commentInputs = {
    comment: ""
}
 
export default function CommentForm(props){
  const {addComment} = useContext(UserContext)
    const [formInputs, setFormInputs] = useState(commentInputs)
    const {takeId, userId, takeTitle} = props
   
    
    function handleChange(e){
        const {name, value} = e.target
        setFormInputs(prevState => ({
          ...prevState,
          [name]: value
        }))
      }

      function handleSubmit(e){
        e.preventDefault()
        addComment(formInputs,takeId,userId, takeTitle)
      }

      const { comment } = formInputs
      
      return(
        <form id="takeFormContainer" onSubmit={handleSubmit}>
            
            <div className="takePageHeader">
              <PageHeader pageHeader="create a comment"/>
            </div>
            <div className="takeInputContainer">
              <input 
                type="text" 
                name="comment" 
                value={comment} 
                onChange={handleChange} 
                placeholder="title"/>
            </div>
                <div id="takeFormButtonContainer">
                  <button id="takeFormButton" className="button-74">create new take</button>
                  <h1>{comment}</h1>
                </div>
        </form>
      )
 }


 /**
  * 63943c65ad7d674327835fcf-take id
  * 63943c54ad7d674327835fcd-user id
  */