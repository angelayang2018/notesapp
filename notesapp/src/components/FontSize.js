import React from "react";
import "./FontSize.css";

function FontSize({darkMode}){
    return(
        <div className = {`font-size-container ${darkMode && 'darkmode-fontsize'}`}>
            <i className="fas fa-minus"></i>
            <select className = "font-sizes">
                <option>6</option>
                <option>12</option>
                <option>28</option>
                <option></option>
            </select>
            <i className="fas fa-plus"></i>

        </div>
    )
}

export default FontSize;