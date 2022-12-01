import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm.jsx"
import { UserContext } from "../context/UserProvider.jsx"

const authInputs = {
    username: "",
    password: ""
}

export default function Auth(){
    const [formInputs, setFormInputs] = useState(authInputs)
    const [authToggle, setAuthToggle] = useState(false)

    const {signup, login} = useContext(UserContext)

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

    return(
        <div id="mainContainer">
            
            {!authToggle ?
            <div class="formContainer">
                <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleSignup}
                formInputs={formInputs}
                btnText="Sign up"
                />
                <p onClick={() => setAuthToggle(prev => !prev)}>no account?</p>
            </div>
            :
            <div class="formContainer">
                <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                formInputs={formInputs}
                btnText="Login"
            />
            <p onClick={() => setAuthToggle(prev => !prev)}>you got an account?</p>
            </div>
            }
        </div>
    )
}