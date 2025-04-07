import { useState } from "react";

function SpotLight({pull,setPull,destination}){
    return (
        <div style={{
            width:"100vw",
            display:"flex",
            justifyContent:"center",
            position:"absolute",
            top:`${pull?"50vh":"100vh"}`,
            padding:"0px",
            transition: "all ease 0.4s"
        }}>
        <div id="spotlight">
            <button id="pull" onClick={()=>setPull(!pull)}></button>
            <br />
            <h3>{destination[0]%10000000}<br></br>{destination[1]%10000000}</h3>
            <h2>images if there</h2>
            <div>
                <button>...</button> 
                <button>...</button> 
                <button>...</button> 
            </div>
        </div>
        </div>
    );
}

export default SpotLight;