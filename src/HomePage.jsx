import { useEffect } from "react";
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

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
        <h1>Home Page</h1>
        <button onClick={()=>handleLogout()}>Logout</button>
        <button onClick={()=>console.log(props.user)}>print user</button>
        <button onClick={()=>navigate("/events")}>goto Events</button>
        </>
    );
}

export default HomePage;