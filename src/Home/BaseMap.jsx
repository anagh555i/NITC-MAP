import {useEffect, useRef,useState} from "react"
import "ol/ol.css"
import {Map, View,Feature} from "ol"
import {Tile,Vector} from "ol/layer"
import { fromLonLat } from "ol/proj";
import {OSM,XYZ} from "ol/source"
import {Point} from "ol/geom"


function BaseMap(){
    const mapRef = useRef();
    // const [map, setMap]= useState(null);
    const map=useRef();
    const [TileLayer,setTileLayer]=useState(new Tile({
        source: new OSM()
    }));
    const [userLocation,setUserLocation]=useState([]);
    const [view, setView]=useState(new View({
        center: [8452796.245751543,1268422.763649639],
        zoom: 20,
        maxZoom: 18.5
    }));
    

    useEffect(()=>{
        const mapInstance= new Map({
            target: mapRef.current,
            layers:[TileLayer],
            view:view
        });
        map.current=mapInstance;
        // mapInstance.
        return ()=>mapInstance.setTarget(null);
    },[]);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            (pos)=>{
                const osmcoordinate=fromLonLat([pos.coords.longitude,pos.coords.latitude]);
                if(map)map.current.getView().setCenter(osmcoordinate);
                // else console.log("no map instance");
                // console.log(osmcoordinate);
                setUserLocation(osmcoordinate);
            },
            (error)=>{
                console.log("error getting location "+error);
            }
        );
    },[]);

    return <>
        <div ref={mapRef} id="map"></div>
    </>
}

export default BaseMap;