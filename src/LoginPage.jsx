import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react';

function LoginPage(props){
    const [cookie, setCookie, removeCookie]=useCookies("user");
    const navigate=useNavigate();

    useEffect(()=>{
    
    },[]);

    function handleLogin(){
        const userData={ // to be obtained from input or from api call
            username:"anonymous",
            role:"anonymous"
            ////////
        };
        setCookie("user",JSON.stringify(userData),{
            path:"/", // available accross all routes
            expires: new Date(Date.now()+60*60*1000)// 1 hour in millisecond, change to 1 day in production
        })
        navigate("/home");
    }

    return (
        <>
        <h1>Login Page</h1>
        <button onClick={()=>handleLogin()}>Sign in</button>
        </>
    );
}

export default LoginPage;