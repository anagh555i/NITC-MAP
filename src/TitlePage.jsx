import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie'
import "./TitlePage.css"

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
            //// rest of the data ////
        };
        setCookie("user",JSON.stringify(guest),{
            path:"/", // available accross all routes
            expires: new Date(Date.now()+60*60*1000)// 1 hour in millisecond, change to 5-7 day in production
        })
        navigate("/home");
    }

    return (
        <div className='title'>
            <div className="logo">
            <div className="c1 circle">
                <div className="c2 circle">
                  <div className="c3 circle">
                    <div className="c4 circle">
                        <h1>*ptr</h1>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        <div className="wlin">
            <h1 id='welcome'>Welcom to POINTER</h1>
            <p>The only wayfinder at NITC you'll ever need</p>
            <br />
            <button onClick={()=>navigate("/login")}>Login/Signup</button>
            <button onClick={()=>handleGuestLogin()} id='guestlogin'>login as guest</button>
        </div>
        </div>
    );
}

export default TitlePage;