import React, {useContext} from 'react'
import TakePage from './components/TakePage.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from "./components/Header.jsx"
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import Public from './components/Public.jsx'
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import { UserContext } from './context/UserProvider.jsx'
import "../styles/auth.css"

export default function App(){
  const { token, logout, user } = useContext(UserContext)
  return (
    <div id="headerContainer">
      <Header header="ROCK THE RIM"/>
      <Navbar logout={ logout }/> 
      <div id="appContainer">
      
      <Routes>
        <Route 
          path="/" 
          element={token ? <Navigate to="/profile"/> : <TakePage/>}
        />
        <Route 
          path="/profile"
          element={<Profile />}
        />
        <Route 
          path="/public"
          element={<Public />}
        />
        {/* <Route 
          path="/profile" 
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Profile/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/public" 
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Public/>
            </ProtectedRoute>
          }
        /> */}
      </Routes> 
      </div>
      
    </div>
  )
}

