import { useState, useEffect} from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import HomePage from "./Home/HomePage.jsx"
import LoginPage from './LoginPage.jsx'
import EventsPage from "./EventsPage.jsx"
import TitlePage from "./TitlePage.jsx"

function App() {
  const [user, setUser]= useState(null);  //no use for now, might as well remove in future
  const [cookie, setCookie, removeCookie]=useCookies("user");
  
  useEffect(()=>{

  },[]);

  return (
    <BrowserRouter basename='NITC-MAP' >
      <Routes>
        <Route path="/" element={<TitlePage user={user} />} />
        <Route path="/home" element={<HomePage user={user} setUser={setUser}/>} />
        <Route path="/login" element={<LoginPage setUser={setUser}/>} />
        <Route path="/events" element={<EventsPage user={user}/>} />
        <Route path="/*" element={<h1>404 Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
