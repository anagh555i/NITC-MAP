import {useEffect, useRef,useState} from "react";
import "ol/ol.css";
import {Map, View,Feature} from "ol";
import {Tile,Vector} from "ol/layer";
import VectorSource from "ol/source/Vector";
import { fromLonLat } from "ol/proj";
import {OSM,XYZ} from "ol/source";
import {Point} from "ol/geom";
import {Style,Icon} from "ol/style"

import PinPoint from "./PinPoint.jsx"
import LayerChanger from "./LayerChanger.jsx"
import locationPuck from "../assets/locationPuck.svg"


function BaseMap(){
    const mapRef = useRef();
    const map=useRef();
    const userLocation=useRef(); //stores the current location of user 
    const [TileLayer,setTileLayer]=useState(new Tile({ //the base layer
        source: new OSM()
    }));
    const [view, setView]=useState(new View({ //map view on screen
        center: [8452796.245751543,1268422.763649639],//nitc maingate coordinates
        zoom: 20,
        maxZoom: 18.5
    }));
    const locationFeature=new Feature({
        geometry: new Point([0,0])
    });
    const PointLayer = new Vector({
        source: new VectorSource({
            features: [
                locationFeature
            ]
        }),
        style: new Style({
            image: new Icon({
                anchor:[0,0],
                src:locationPuck,
                scale:0.2
            })
        })
    });
    
    useEffect(()=>{
        navigator.geolocation.watchPosition(
            (pos)=>{
                userLocation.current=fromLonLat([pos.coords.longitude,pos.coords.latitude]);
                locationFeature.getGeometry().setCoordinates(userLocation.current);
            },
            (error)=>{
                console.log("error getting location "+error);
            }
        );
    },[]);
    
    useEffect(()=>{
        const mapInstance= new Map({
            target: mapRef.current,
            layers:[TileLayer,PointLayer],
            view:view
        });
        map.current=mapInstance;
        return ()=>mapInstance.setTarget(null); //call back to unmount map
    },[]);

    useEffect(()=>{
        const layers=map.current.getLayers().getArray();
        map.current.setLayers([TileLayer,...layers.slice(1)]);
        map.current.setView(view);
    },[view,TileLayer]);

    return (
    <div id="basemap">
        <div ref={mapRef} id="map" ></div>
        <LayerChanger setTileLayer={setTileLayer}/>
        <PinPoint setView={setView} userLocation={userLocation.current}/>
    </div>
    );
}

export default BaseMap;
