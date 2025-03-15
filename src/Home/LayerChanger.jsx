import {Tile} from "ol/layer";
import {OSM,XYZ} from "ol/source";
import { useState } from "react";

import layericon from "../assets/layers.svg"
import { transform } from "ol/proj";


function LayerChanger({setTileLayer}){
    const [iconclick,seticonclick]=useState(false);
    const osmLayer=new Tile({ //the base layer
        source: new OSM()
    });
    const esriSatelliteLayer = new Tile({
        source: new XYZ({
            url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        }),
    });

    const style1={
        transform:`translateY(${iconclick?"60px":"0px"})`
    }
    const style2={
        transform:`translateY(${iconclick?"120px":"0px"})`
    }

    return (
        <div id="layerchanger">
            <button style={style2} className="layers" id="osm" onClick={()=>{setTileLayer(osmLayer);seticonclick(!iconclick)}}>OSM</button>
            <button style={style1} className="layers" id="satellite" onClick={()=>{setTileLayer(esriSatelliteLayer);seticonclick(!iconclick)}}>SAT</button>
            <button className="layers" onClick={()=>seticonclick(!iconclick)}><img style={{width:"35px"}} src={layericon} alt="" /></button>
        </div>
    );
}

// might as well change to array based rendering 

export default LayerChanger;