import React from "react";
import "./Main.css";

function Toolbar({onToggleMode}){
    return(
        <div>
            <button onClick = {() => {
                onToggleMode(
                    (previousDarkMode) => !previousDarkMode
                )}
            }>Toggle</button>
            <button>Search</button>
        </div>
    )
}

export default Toolbar;