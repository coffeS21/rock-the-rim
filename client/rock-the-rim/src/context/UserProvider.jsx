import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()

//this var lets us create a personal axios
const userAxios = axios.create()

//this is the token to be used when making a request to a api protected route
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const blankUser = {
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "", 
        takes: []
    }
    const [blankUserState, setBlankUserState] = useState(blankUser)

    function signup(userInfo){
        axios.post("/auth/signup", userInfo)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setBlankUserState(prevState => ({
                ...prevState,
                user,
                token
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
    function login(userInfo){
        axios.post("/auth/login", userInfo)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getMyTakes()
            setBlankUserState(prevState => ({
                ...prevState,
                user,
                token
            }))
        })
        .catch(err => console.log(err.response.dataa.errMsg))
    }
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setBlankUserState({
            user: {},
            token: "",
            todos: []
        })
    }

    function getMyTakes(newTake){
        userAxios.get("/api/takes/user")
        .then(res => {
            setBlankUserState(prevState => ({
                ...prevState,
                tajes: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addTake(newTake){
        userAxios.post("api/takes", newTake)
        .then(res => {
            setBlankUserState(prevState => ({
                ...prevState,
                takes: [...prevState.takes, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <UserContext.Provider
            value ={{
                ...blankUserState,
                addTake,
                getMyTakes,
                signup,
                login
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}