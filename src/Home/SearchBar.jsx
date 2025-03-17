import { useRef } from "react";

import menuicon from "../assets/menubar.svg"
import searchicon from "../assets/search.svg"

function SearchBar({menuUp,setMenuUp}){
    const searchtext=useRef();
    return(
        <div id="searchcontainer">
        <div id="search">
            <button id="morebutton" onClick={()=>setMenuUp(!menuUp)}>
                <img src={menuicon} alt="" style={{height:"40px"}}/>
            </button>
            <input type="text" ref={searchtext} placeholder="Search here"/>
            <img src={searchicon} alt="" />
        </div>
        </div>
    );
}

export default SearchBar;