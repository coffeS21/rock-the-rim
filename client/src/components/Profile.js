import React, {useContext} from 'react'
import  Header from "./Header"
import PageHeader from "./PageHeader.js"
import { UserContext } from '../context/UserProvider.js'
import "../styles/profile.css"
export default function Profile(){
  /**
   * each take can have its own comment page
   * based on take id and when you click a button it takes you to a page were you can see all the takes
   */
  const { 
    user: {_id, joinDate, username},
    logout,
    deleteAccount
  } = useContext(UserContext)
  console.log(useContext(UserContext))
  
  function remove(){
    deleteAccount(_id)
  }
  return (
    <div id="profilePageContainer">

      <div className="pageHeader">
        <PageHeader pageHeader="Profile Page"/>
      </div>
      
      <div id="profileInfoContainer">
        <h3>profile created on:</h3>
        <p>{joinDate}</p>
        <p>{username}</p>
        <div id="profileButtonContainer">
          <button onClick={logout} className="button-74" >logout</button>
          <button onClick={remove} className="button-74" >delete account</button>
        </div>
      </div>
    
    </div>
  )
}


{/* <h3>Add A Take</h3>
<TakeForm addTakes={addTakes}/> */}
/**join date should be here
    logout button should be here 
    your comments should be here
    create a take should be its own page in a nav
    
    */