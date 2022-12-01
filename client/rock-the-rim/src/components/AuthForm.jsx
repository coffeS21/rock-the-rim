import React from "react"
"../../styles/authForm.csss"
export default function AuthForm(props){
    
    const {
        handleChange,
        handleSubmit,
        btnText,
        formInputs: {
            username,
            password
        }
    } =props

    return(
        <form id="formContainer" onSubmit={handleSubmit}>
            <input
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
            palceholder="username"/>
            <input
            type="text"
            value={password}
            name="password"
            onChange={handleChange}
            palceholder="password"/>
            <button>{btnText}</button>
        </form>
    )
}