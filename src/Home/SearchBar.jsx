import { useRef,useState, useEffect } from "react";
import {Map, View,Feature} from "ol"

import menuicon from "../assets/menubar.svg"
import searchicon from "../assets/search.svg"

function SearchBar({menuUp,setMenuUp,setView,setDestination}){
    const [searchtext,setSearchText]=useState("^^^^^^^^^^^^^");
    const [locations,setLocations]=useState([]);

    useEffect(()=>{
        console.log(locations);
        fetchLocations();
    },[]);

    async function fetchLocations(){
        let arr=(await fetch(`https://nitc-map-backend.onrender.com/api/feature/getLocations/`));
        console.log(arr);
        arr =await arr.json();
        setLocations(arr);
    }

    return(
        <div id="searchcontainer">
        <div id="search">
            <button id="morebutton" onClick={()=>setMenuUp(!menuUp)}>
                <img src={menuicon} alt="" style={{height:"100%"}}/>
            </button>
            <input type="text"  placeholder="Search here" onChange={(e)=>{
                if(e.target.value=="") setSearchText("^^^^^^^^^^^^^");
                else setSearchText(e.target.value.toLowerCase());
            }}/>
            <button id="searchbutton">
                <img src={searchicon} alt="" style={{height:"100%"}}/>
            </button>
        </div>
        <div id="searchResult" style={{display:searchtext=="^^^^^^^^^^^^^"?"none":"block"}}>
            {   
                locations.filter((e)=>e.featureName.includes(searchtext)).map((e,i)=>{
                    return (
                        <div className="searchfield" key={i} onClick={()=>{
                            // console.log(e.location[0].split(',').map(Number));
                            setView(new View({
                                center: e.location[0].split(',').map(Number),
                                zoom: 20,
                                maxZoom: 18.5
                            }));
                            setDestination(e.location[0].split(',').map(Number));
                            setSearchText("^^^^^^^^^^^^^");
                        }}> {e.featureName}</div>
                    );
                })
            }
        </div>
        </div>
    );
}


export default SearchBar;