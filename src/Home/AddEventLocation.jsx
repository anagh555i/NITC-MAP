import close from "../assets/close.svg"
import { useRef } from "react";

function AddEventLocation({eventLoc,destination,setEventLoc}){
    const locationName=useRef("");
    const eventName=useRef("");
    const eventPoster=useRef(null);
    const startTime=useRef(null); 
    const endTime=useRef(null); 

    async function handleAddLocation(){
        setEventLoc("none");
        try {
            const res= await fetch("https://nitc-map-backend.onrender.com/api/feature/add", {
                method: "post",
                headers:{
                    "content-Type":"application/json"
                },
                body: JSON.stringify({ 
                    featureName:`${locationName.current}`,
                    location:`${destination}`
                }),
            });

            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }
    async function handleAddEvent(){
        setEventLoc("none");
        try {
            const res= await fetch("https://nitc-map-backend.onrender.com/api/event/add", {
                method: "post",
                headers:{
                    "content-Type":"application/json"
                },
                body: JSON.stringify({ 
                    eventName:`${eventName.current}`,
                    startTime:`${startTime.current}`, 
                    endTime:`${endTime.current}`, 
                    location:`${destination}`
                }),
            });

            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }
    
    if(eventLoc=="location")return (
        <>
        <div className="addeventlocation">
            <div className="container">
                <img src={close} alt="" style={{height:"20px"}} onClick={()=>setEventLoc("none")}/>
                <br />
                <p>Location name:</p>
                <input type="text" onChange={(e)=>locationName.current=e.target.value}/>
                <button id="locationAddbutton" onClick={()=>handleAddLocation()}>Add Location</button>
            </div>
        </div>
        </>
    );
    else if(eventLoc=="event") return (
        <>
        <div className="addeventlocation">
            <div className="container">
                <img src={close} alt="" style={{height:"20px"}} onClick={()=>setEventLoc("none")}/>
                <br />
                <p>Event name:</p>
                <input type="text" onChange={(e)=>eventName.current=e.target.value}/>
                <p>Event poster:</p>
                <input type="file" name="" id="" onChange={(e)=>eventPoster.current=e.target.value}/>
                <p>Start time:</p>
                <input type="datetime-local" name="" id="" onChange={(e)=>startTime.current=e.target.value}/>
                <p>End time:</p>
                <input type="datetime-local" name="" id="" onChange={(e)=>endTime.current=e.target.value}/>
                <button id="locationAddbutton" onClick={()=>handleAddEvent()}>Add Event</button>
            </div>
        </div>
        </>
    );
    else return null;
}

export default AddEventLocation;