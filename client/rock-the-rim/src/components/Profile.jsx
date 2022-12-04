import React, {useContext} from 'react'
import TakeForm from './TakeForm.jsx'
import TakeList from './TakeList.jsx'
import Take from './Take.jsx'
import PageHeader from "./PageHeader.jsx"
import { UserContext } from '../context/UserProvider.jsx'

export default function Profile(props){
  const { 
    user: { 
      username 
    }, 
    addTakes, 
    takes 
  } = useContext(UserContext)
  
  return (
    <div id="profileContainer">
      <div>
        <PageHeader pageHeader="Profile Page"/>
      </div>
      <div>
        <h3>profile creatd</h3>
        <p>10/12/21</p>
      </div>
      <div>
      <button className="button-74" role="button">logout</button>
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