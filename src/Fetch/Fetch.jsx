import React,{ useState, useEffect } from 'react';
import './Fetch.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Fetch() {
    const [array,setArray] = useState([]);

 const axios_data=()=>{
    axios.get(`https://api.github.com/users`)
    .then(res=>{
        setArray(res.data);
    })
    .catch(err=>{
        console.log(err);
    })
 }
 useEffect(() => {
     axios_data();
 }, [])

    return (
            <>
    <div>
            {array.map(index=>{
                console.log(index.login);
            return(
            <div className="body">
            <div className="card">
    <img src={index.avatar_url} height="280px" width="340px" display="inline-block"/>
    <div className="info">{index.id}</div>
    <div className="title">{index.login}</div>
    <a href={index.url} className="btn btn-primary btn-lg">Visit</a>
    </div>
    </div>
            )
})}
    </div>
    {/* <a class="btn btn-primary btn-lg">Click me</a> */}
        </>    
    )

}

export default Fetch;
