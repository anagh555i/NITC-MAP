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

    useEffect(()=>{
        if(!cookie.user) navigate("/"); 
        setEvents([
            {
                eventName:"wheels",
                location:[8452796.245751543,1268422.763649639],
                poster:null,
                startTime:new Date(2018, 11, 24, 10, 33, 30, 0),
                endTime:new Date(2018, 11, 24, 11, 33, 30, 0),
            },
            {
                eventName:"proshow",
                location:[8452796.245751543,1268422.763649639],
                poster:null,
                startTime:new Date(2018, 11, 24, 10, 33, 30, 0),
                endTime:new Date(2018, 11, 24, 10, 50, 30, 0),
            },
            {
                eventName:"wheels",
                location:[8452796.245751543,1268422.763649639],
                poster:null,
                startTime:new Date(2018, 11, 24, 10, 33, 30, 0),
                endTime:new Date(2018, 11, 24, 11, 33, 30, 0),
            },
            {
                eventName:"proshow",
                location:[8452796.245751543,1268422.763649639],
                poster:null,
                startTime:new Date(2018, 11, 24, 10, 33, 30, 0),
                endTime:new Date(2018, 11, 24, 10, 50, 30, 0),
            }
        ])
    },[]);

    const Eventslist=events.map(el=>{
        <div className="Event">el.eventName</div>
    })

    return (
        <div id="eventsContainer">  
            <button onClick={()=>{navigate("/home")}} id='backbutton'>
                <img src={backbutton} alt="" style={{height:"100%"}}/>
            </button>
            {events.map((el,index)=>{
                return (<div className="event" key={index}>
                    <h2 className="EventHead">{el.eventName.toUpperCase()}</h2>
                    <img src={el.poster} alt="img" />
                    <h3>START:{el.startTime.toString()}</h3>
                    <h3>END:{el.endTime.toString()}</h3>
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