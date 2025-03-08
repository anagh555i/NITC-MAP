import { useCookies } from 'react-cookie'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EventsPage(props){
    const [cookie, setCookie, removeCookie]=useCookies("user");
    const navigate=useNavigate();

    useEffect(()=>{
        if(!cookie.user) navigate("/"); 
    },[]);

    return (
        <>
            <h1>Events page</h1>
            <button onClick={()=>{navigate("/home")}}>home</button>
        </>
    );
}

export default EventsPage;