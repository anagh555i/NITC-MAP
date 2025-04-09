import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Map, View,Feature} from "ol"
import "./EventsPage.css"

import backbutton from "../assets/backbutton.svg"

function EventsPage({view,setView}){
    const [cookie, setCookie, removeCookie]=useCookies("user");
    const navigate=useNavigate();
    const [events,setEvents]=useState([]);

    async function fetchEvents(){
        let arr=(await fetch(`https://nitc-map-backend.onrender.com/api/event/getAllEvents/`));
        console.log(arr);
        arr =await arr.json();
        setEvents(arr);
    }

    useEffect(()=>{
        if(!cookie.user) navigate("/"); 
        fetchEvents();
    },[]);

    const Eventslist=events.map(el=>{
        <div className="Event">el.eventName</div>
    })

    return (
        <div id="eventsContainer">  
            <button onClick={()=>{navigate("/home")}} id='backbutton'>
                <img src={backbutton} alt="" style={{height:"80px"}}/>
            </button>
            {events.map((el,index)=>{
                let startTime=new Date(el.start.toString());
                startTime=startTime.toLocaleString();
                let endTime=new Date(el.end.toString());
                endTime=endTime.toLocaleString();
                return (<div className="event" key={index}>
                    <h2 className="EventHead">{el.eventName.toUpperCase()}</h2>
                    <img src={el.poster} alt="img" />
                    <h3>START: {startTime}</h3>
                    <h3>END: {endTime}</h3>
                    <button onClick={()=>{
                        navigate("/home");
                        setView(new View({
                            center: el.location,
                            zoom: 20,
                            maxZoom: 18.5
                        }));
                    }} id='gotoLocation'>Location</button>
                </div>);
            })}
        </div>
    );
}

export default EventsPage;