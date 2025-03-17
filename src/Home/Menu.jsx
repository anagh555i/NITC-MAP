import { useState } from "react";
import userIcon from "../assets/userIcon.svg"

function Menu({menuUp,setMenuUp,handleLogout}){
    return (
        <>
        <div id="blurlayer" style={{visibility:menuUp?"visible":"hidden"}} onClick={()=>setMenuUp(false)}></div>
        <div id="menucontianer" style={{left:menuUp?"0px":"-300px"}} >
            <div id="menu">
                <div id="profile">
                    <img src={userIcon} alt="User profile img" style={{width:"100px"}}/>
                    <h3>anonymous</h3>
                    <h3>anonymout@gmail.com</h3>
                </div>
                <br />
                
                <button onClick={()=>handleLogout()}>Logout</button>
            </div>
        </div>
        </>
    );
}

export default Menu;