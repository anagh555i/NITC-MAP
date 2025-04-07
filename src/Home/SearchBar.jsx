import { useRef } from "react";

import menuicon from "../assets/menubar.svg"
import searchicon from "../assets/search.svg"

function SearchBar({menuUp,setMenuUp}){
    const searchtext=useRef();
    return(
        <div id="searchcontainer">
        <div id="search">
            <button id="morebutton" onClick={()=>setMenuUp(!menuUp)}>
                <img src={menuicon} alt="" style={{height:"100%"}}/>
            </button>
            <input type="text" ref={searchtext} placeholder="Search here"/>
            <button id="searchbutton">
                <img src={searchicon} alt="" style={{height:"100%"}}/>
            </button>
        </div>
        </div>
    );
}

export default SearchBar;