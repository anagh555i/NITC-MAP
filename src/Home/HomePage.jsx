import { useEffect } from "react";
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

import BaseMap from "./BaseMap.jsx"
import "./Homepage.css"

function HomePage(props){
    const [cookie, setCookie, removeCookie]=useCookies("user");
    const navigate=useNavigate();

    useEffect(()=>{
        if(cookie.user) props.setUser(cookie.user);
        else {
            props.setUser(null);
            navigate("/");
        }
    },[]);
    
    function handleLogout(){
        removeCookie("user",{path:"/"});
        props.setUser(null);
        navigate("/");
    }

    return (
        <>
        <BaseMap/>
        <button onClick={()=>handleLogout()} style={{position:"absolute",bottom:"100px"}}>Logout</button>
        </>
    );
}

export default HomePage;

// <h1>Home Page</h1>
// <button onClick={()=>handleLogout()}>Logout</button>
// <button onClick={()=>console.log(props.user)}>print user</button>
// <button onClick={()=>navigate("/events")}>goto Events</button>