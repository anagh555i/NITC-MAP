import { useEffect,useState } from "react";
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

import BaseMap from "./BaseMap.jsx"
import SearchBar from "./SearchBar.jsx"
import Menu from "./Menu.jsx"
import SpotLight from "./SpotLight.jsx"
import "./Homepage.css"

function HomePage(props){
    const [cookie, setCookie, removeCookie]=useCookies("user");
    const [menuUp, setMenuUp]=useState(false);
    const [pull,setPull]=useState(false); // for pulling spotlight div
    const [destination,setDestination]=useState([8452796.245751543,1268422.763649639]);
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
        <BaseMap setPull={setPull} setDestination={setDestination} view={props.view} setView={props.setView}/>
        <SearchBar setMenuUp={setMenuUp} menuUp={menuUp}/>
        <SpotLight pull={pull} setPull={setPull} destination={destination}/>
        <Menu menuUp={menuUp} setMenuUp={setMenuUp} handleLogout={handleLogout}/>
        </>
    );
}

export default HomePage;

// <h1>Home Page</h1>
// <button onClick={()=>handleLogout()}>Logout</button>
// <button onClick={()=>console.log(props.user)}>print user</button>
// <button onClick={()=>navigate("/events")}>goto Events</button>