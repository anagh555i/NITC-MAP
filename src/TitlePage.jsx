import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie'

function TitlePage(props){
    const [cookie, setCookie, removeCookie]=useCookies("user");
    const navigate= useNavigate(); 

    useEffect(()=>{
        if(cookie.user) navigate("/home");
    },[]);

    function handleGuestLogin(){
        const guest={
            username:"guest",
            role:"guest"
            ////////
        };
        setCookie("user",JSON.stringify(guest),{
            path:"/", // available accross all routes
            expires: new Date(Date.now()+60*60*1000)// 1 hour in millisecond, change to 1 day in production
        })
        navigate("/home");
    }

    return (
        <>
        <h1>Title Page</h1>
        <button onClick={()=>navigate("/login")}>go to login</button>
        <button onClick={()=>handleGuestLogin()}>login as guest</button>
        </>
    );
}

export default TitlePage;