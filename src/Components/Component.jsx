import React,{ useEffect, useState } from 'react';
import './Component.css';
// import data from './data';
//Importing Images
// import dark_img from './images/dark.jpg';
// import vikings_img from './images/vikings.jpg';
// import breakingBad_img from './images/breakingBad.jfif';
import data from './data';


//Function with props
function Component() {

    // useEffect(()=>{
    //     console.log("data changed");
    // },  []);

    return <> 
    <div className="body">
    {data.map((val)=>{ 
        return(
            <>
            <div className="card">
    <img src={val.imgsrc} height="280px" width="340px" display="inline-block"/>
    <div className="info">{val.info}</div>
    <div className="title">{val.title}</div>
    <a href={val.link}><button className="btn">Watch Now</button></a>
    </div>
            </>
        )
     })}
     </div>

    </>
}


// function fn(val,index,arr) {
//     console.log(val);
//     // console.log(index);
//     // console.log(arr);


//     return (
//         <Component
//         key = {val.id}
//         imgsrc = {val.imgsrc}
//         info = {val.info}
//         title = {val.title}
//         link = {val.link}
//         />
//     )
// }

//Exporting function and objects
export default Component;
// export {fn};
// export {dark};
// export {vikings};
// export {breakingBad};