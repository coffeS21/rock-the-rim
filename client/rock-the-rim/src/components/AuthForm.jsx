import React from "react"

export default function AuthForm(props){
    
    const {
        handleChange,
        handleSubmit,
        buttonText,
        formInputs: {
            username,
            password
        }
    } =props

    return(
        <form onSubmit={handleSubmit}>
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
            <button>{buttonText}</button>
        </form>
    )
}