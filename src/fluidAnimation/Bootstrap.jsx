import React from 'react';
import web from "./rocket.svg";
import "./Bootstrap.css";

const Bootstrap = () => {
    return (
        <div  style={{height:"100vh",width:"100%",display:'flex', justifyContent:"center", alignItems:"center" }}>
            <img className="image" src={web}  height="500" width="500" alt="Responsive image"/>
        </div>
    )
}

export default Bootstrap
