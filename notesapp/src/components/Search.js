import React from "react";
import "./Toolbar.css"

function Search(){
    return(
        <div className = "search-container">
            <i className="fas fa-search"></i>
            <input type = "text" placeholder="Search" />
            

        </div>
    )  
}

export default Search;