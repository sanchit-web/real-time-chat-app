import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <div className="bg-[url('./src/assets/chatappbg.png')] bg-cover bg-center bg-no-repeat ">
      <Toaster/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>

    </div>
  )
}

export default App