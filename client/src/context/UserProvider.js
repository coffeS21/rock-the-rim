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

/**
 * make the take functions in the userProvider
 * and give them to the take form
 * 
 */
 
/************ */
export default function UserProvider(props){
    const blankUser = {
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "", 
        takes: [],
        allTakes: [],
        comments: [],
        errMsg: "",
        upvote: ""
    }
    const [blankUserState, setBlankUserState] = useState(blankUser)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
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
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }
    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getMyTakes()
            getAllTakes()
            getAllComments()
            setBlankUserState(prevState => ({
                ...prevState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }
    function logout(){
        
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setBlankUserState({
            user: {},
            token: "",
            takes: [],
            allTakes: [],
            comments:[]
        })
    }

    function getMyTakes( ){
        userAxios.get("/api/take/user")
        .then(res => {
            setBlankUserState(prevState => ({
                ...prevState,
                takes: res.data
            }))
            
        })
        .catch(err => console.log(err.response.data.errMsg))
    }


    function getAllComments(){
        userAxios.get("/api/comment")
        .then(res => {
            setBlankUserState(prevState => ({
                ...prevState,
                comments: res.data
            }))
            
        })
    }
    function getAllTakes( ){
        userAxios.get("/api/take")
        .then(res => {
            setBlankUserState(prevState => ({
                ...prevState,
                allTakes: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteAccount(userId){
        userAxios.delete(`/api/user/${userId}`)
        .then(res => console.log(res))
        localStorage.removeItem("user")
        setBlankUserState({
            user: {},
            token: "",
            takes: [],
            comments: []
        })
        .catch(err => console.log(err))
    }






    function addTake(newTake){
        userAxios.post("api/take", newTake)
         .then(res => {
            console.log(res.data)
             setBlankUserState(prevState => ({
                 ...prevState,
                 takes: [...prevState.takes, res.data]
             }))
         })
        .catch(err => console.log(err.response.data.errMsg))
    }



    function addComment(newComment, takeId, userId){
        userAxios.post(`api/comment/${takeId}/${userId}`, newComment)
         .then(res => {
            console.log(res.data)
             setBlankUserState(prevState => ({
                 ...prevState,
                 comments: [...prevState.comments, res.data]
             }))
         })
        .catch(err => console.log(err.response.data.errMsg))
    }
    

    function upvote(takeId){
        userAxios.put(`api/take/upvote/${takeId}`)
        .then(res => {
            console.log("this is an upvote")
            
            // setBlankUserState(prevState =>({
            //     ...prevState,
            //     upVote
            // }))

        })
        
        .catch(err => console.log(err.response.data.errMsg))
    }
  


    function handleAuthErr(errMsg){
        setBlankUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function restAuthErr(){
        setBlankUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }
/**
 * make an all takes function in context
 * make an all takes component called all takeslist and allTake
 * 
 * the user clicks a button the trigers a put request the upvote
 * end point and the endpoint is going to take care of the upate 
 * for us!
 * 
 */
    return(
        <UserContext.Provider
            value ={{
                ...blankUserState,
                addTake,
                signup,
                login,
                logout,
                restAuthErr,
                getAllTakes,
                deleteAccount,
                addComment,
                upvote,
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

/**
 * in take form page on the takeform component pass in a prop for the 
 * function that you created in usecontext call addTake
 * 
 * then in the takeForm use props
 * so that you can use the add takes function in the takeForm handleSubmit
 * 
 * in the takeForm the new takes will be the values of the take inputs
 * 
 *  in the take page bring in the takelist
 * using context pass takelist a prop called takes
 * this is the array of takes saved in state from context
 * 
 * now in takelist recive the takes as a prop
 * 
 * use the take prop array and map it
 * when you map it you will return the take component
 */