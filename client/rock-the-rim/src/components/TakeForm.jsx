import React, {useState} from "react"

const takeInputs = {
    title: ""
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

      const { title } = formInputs
      
      return(
        <form>
          <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Title"/>
        <button>Add Todo</button>
        </form>
      )
 }