import React, {useState} from "react"
import "../../styles/auth.css"
import PageHeader from './PageHeader.jsx'
const takeInputs = {
    takeTitle: "",
    takeBody: ""
}
 export default function TakeForm(props){
    const [formInputs, setFormInputs] = useState(takeInputs)
    const {addTake} = props

    function handleChange(e){
        const {name, value} = e.target
        setFormInputs(prevState => ({
          ...prevState,
          [name]: value
        }))
      }

      function handleSubmit(e){
        e.preventDefault()
        addTake(formInputs)
        setInputs(takeInputs)
      }

      const { takeTitle, takeBody } = formInputs
      
      return(
        <form id="takeFormContainer" onSubmit={handleSubmit}>
            
            <div className="takePageHeader">
              <PageHeader pageHeader="create a take"/>
            </div>

            <div className="takeInputContainer">
              <input 
                type="text" 
                name="takeTitle" 
                value={takeTitle} 
                onChange={handleChange} 
                placeholder="title"/>
            </div>

        
                        
            <div className="takeInputContainer">
              <input 
                type="text" 
                name="takeTitle" 
                value={takeTitle} 
                onChange={handleChange} 
                placeholder="take"/>
            </div>
            
                <div id="takeFormButtonContainer">
                  <button id="takeFormButton" className="button-74" role="button">create new take</button>
                </div>


          

          

        </form>
      )
 }