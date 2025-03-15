import { fromLonLat } from "ol/proj";
import {Map, View,Feature} from "ol"

import pinpointicon from "../assets/pinpoint.svg"

function PinPoint({setView,userLocation}){
    function gotoCurrentLocation(){
        setView(new View({
            center: userLocation,
            zoom: 20,
            maxZoom: 18.5
        }))
    }

    return (
        <button onClick={()=>gotoCurrentLocation()} id="pinpoint">
            <img src={pinpointicon} alt="" style={{width:"40px"}}/>
        </button>
    );
}

export default PinPoint;