import { useState } from "react";

function SpotLight({pull,setPull,destination,setEventLoc}){

    function handleAddLocation(){
        setPull(!pull);
        setEventLoc("location");
    }
    function handleAddEvent(){
        setPull(!pull);
        setEventLoc("event");
    }

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
            <p>{destination[0]}<br></br>{destination[1]}</p>
            <img src={null} alt="img" />
            <div>
                <button>...</button> 
                <button onClick={()=>handleAddLocation()}>Add location</button> 
                <button onClick={()=>handleAddEvent()}>Add event</button> 
            </div>
        </div>
        </div>
    );
}

export default SpotLight;