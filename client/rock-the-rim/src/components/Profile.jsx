import React, {useContext} from 'react'
import TodoForm from './TakeForm.jsx'
import TodoList from './TakeList.jsx'
import Todo from './Take.jsx'
import { UserContext } from '../context/UserProvider.jsx'

export default function Profile(){
  const { 
    user: { 
      username 
    }, 
    addTakes, 
    takes 
  } = useContext(UserContext)
  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A Take</h3>
      <TodoForm addTakes={addTakes}/>
      <h3>Your Takes</h3>
      <TodoList takes={takes}/>
    </div>
  )
}