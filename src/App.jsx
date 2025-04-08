import { useState, useEffect} from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import {View} from "ol";

import HomePage from "./Home/HomePage.jsx"
import LoginPage from './LoginPage.jsx'
import EventsPage from "./Event/EventsPage.jsx"
import TitlePage from "./TitlePage.jsx"
import SignupPage from './SignupPage.jsx';

function App() {
  const [user, setUser]= useState(null);  //no use for now, might as well remove in future
  const [cookie, setCookie, removeCookie]=useCookies("user");
  const [locations,setLocations]= useState([]);

  const [view, setView]=useState(new View({ //map view on screen
    center: [8452796.245751543,1268422.763649639],//nitc maingate coordinates
    zoom: 20,
    maxZoom: 18.5
  }));
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  return (
    <BrowserRouter basename='/' >
      <Routes>
        <Route path="/" element={<TitlePage user={user} />} />
        <Route path="/home" element={<HomePage user={user} setUser={setUser} view={view} setView={setView} locations={locations}/>} />
        <Route path="/login" element={<LoginPage setUser={setUser}/>} />
        <Route path="/Signup" element={<SignupPage setUser={setUser}/>} />
        <Route path="/events" element={<EventsPage user={user} setView={setView} view={view}/>} />
        <Route path="/*" element={<h1>404 Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
