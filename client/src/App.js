import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import CommentPage from "./components/CommentPage"
import TakePage from "./components/TakePage.js"
import Auth from "./components/Auth.js"
import Navbar from './components/Navbar.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import ProtectedRoute from "./components/ProtectedRoute.js"
import { UserContext } from './context/UserProvider.js'


export default function App(){
  const { token } = useContext(UserContext)
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
          path="/takePage" 
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <TakePage/>
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
        <Route 
          path="/commentPage" 
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <CommentPage/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}