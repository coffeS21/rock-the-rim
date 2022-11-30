import React, {useState, useContext} from "react"
// will import authForm here
import { UserContext } from "../context/UserProvider"

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
        <div>
            //header component will go here
            {!authToggle ?
            <>
                <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleSignup}
                formInputs={formInputs}
                btnText="Sign up"
                />
                <button onClick={() => setAuthToggle(prev => !prev)}>no account?</button>
            </>
            :
            <>
                <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                formInputs={formInputs}
                btnText="Login"
            />
            <button onClick={() => setAuthToggle(prev => !prev)}>you got an account?</button>
            </>
            }
        </div>
    )
}