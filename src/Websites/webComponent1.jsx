import React from 'react';
import './webComponent1.css';
import Typical from 'react-typical';


const webComponent =()=>{

    return(
        <>
            <div className="body_1">
        <div className="center_1">React</div>
        <div className="acenter_1"><Typical steps={['A JavaScript library for building user interfaces', 2000,' A JavaScript library for building user interfaces',2000]} loop={Infinity} /></div>
        <div class="container_1">
            <button className="btn_1">Get Started</button> &nbsp; &nbsp; <a href='#'>Take the Tutorial {`>`} </a>
        </div>
            </div>
        </>
    )
}

export default webComponent;