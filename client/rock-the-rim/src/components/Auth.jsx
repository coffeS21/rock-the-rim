import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm.jsx"
import { UserContext } from "../context/UserProvider.jsx"
import Intro from "./Intro.jsx"
import "../../styles/auth.css"
const authInputs = {
    username: "",
    password: ""
}

export default function Auth(){
    const [formInputs, setFormInputs] = useState(authInputs)
    const [authToggle, setAuthToggle] = useState(false)

    const {signup, login, errMsg, restAuthErr} = useContext(UserContext)

    function handleChange (e){
        const {name, value} = e.target
        setFormInputs(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(formInputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(formInputs)
    }

    function toggleForm(){
        setAuthToggle(prev => !prev)
        restAuthErr()
      }

    return(
        <div id="authContainer">
            <Intro/>
            {!authToggle ?
            <>
                <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleSignup}
                formInputs={formInputs}
                errMsg={errMsg}
                btnText="Sign up"
                />
                
                <p onClick={toggleForm}>Already a member?</p>
            </>
            :
            <>
                <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                formInputs={formInputs}
                errMsg={errMsg}
                btnText="Login"
            />

            <p onClick={toggleForm}>Not a member?</p>
            </>
            }
        </div>
    )
}