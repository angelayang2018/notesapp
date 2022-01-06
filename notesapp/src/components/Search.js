import React from "react";
import "./Toolbar.css"

function Search({onSearchText}){
    return(
        <div className = "search-container">
            <i className="fas fa-search"></i>
            <input onChange = {e => {onSearchText(e.target.value)}}type = "text" placeholder="Search" />
        </div>
    )  
}

export default Search;