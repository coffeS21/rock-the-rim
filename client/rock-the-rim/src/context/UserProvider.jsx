import React, {useState} from "react"

export const UserContext = React.createContext()

export default function UserProvider(props){
    const person = {name: "sheltz"}
    const [personState, setPersonState] = useState(person)
    return(
        <UserContext.Provider
            value ={{
                ...personState
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}