import React from "react"
import "../../styles/auth.css"
export default function AuthForm(props){
    
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        formInputs: {
            username,
            password
        }
    } =props

    return(
        <form id="authFormContainer" onSubmit={handleSubmit}>
            
            <label className="label">
                username
                <input
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
                palceholder="username"/>
            </label>
            <label className="label">
                password
                <input
                type="text"
                value={password}
                name="password"
                onChange={handleChange}
                palceholder="password"/>
            </label>
  <button className="button-74" role="button">{btnText}</button>
            <p >{errMsg}</p>
        </form>
    )
}