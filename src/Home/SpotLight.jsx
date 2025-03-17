import { useState } from "react";

function SpotLight(){
    const [pull,setPull]=useState(false);
    return (
        <div style={{
            width:"100vw",
            display:"flex",
            justifyContent:"center",
            position:"absolute",
            top:`${pull?"50vh":"96vh"}`,
            padding:"0px",
            transition: "all ease 0.5s"
        }}>
        <div id="spotlight">
            <button id="pull" onClick={()=>setPull(!pull)}></button>
            <br />
            <h2>coordinate info</h2>
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