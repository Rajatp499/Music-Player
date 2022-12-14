import React from 'react';
import './webComponent3.css';

const webComponent3 =(props)=>{
    return(
        <>
    <div class="body_3">
        <div className="title_3">{props.title}</div><br />
        {props.body}
    </div>
        </>
    )

}

export default webComponent3;