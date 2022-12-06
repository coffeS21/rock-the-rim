import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from "./components/Header.jsx"
import Auth from "./components/Auth.jsx"
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import Public from './components/Public.jsx'
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import { UserContext } from './context/UserProvider.jsx'
import "../styles/auth.css"

export default function App(){
  const { token, logout, user } = useContext(UserContext)
  return (
    <div className="app">
      { token && <Navbar/> }
      <Routes>
        <Route 
          path="/" 
          element={token ? <Navigate to="/profile"/> : <Auth />}
        />
        <Route 
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
        />
      </Routes>
    </div>
  )
}

