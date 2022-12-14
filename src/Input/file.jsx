import React,{useState,useEffect} from 'react'
import './file.css';
// import axios from "axios";

const File = () => {
    const [image,setImage]=useState("");

    const onchange=(e)=>{
        const file=e.target.files[0];
        const reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onload=()=>{
            setImage(reader.result);
        }
        reader.onerror=()=>{
            alert("File Not Supported"+<br />+reader.error);
        }
    }

    return (
        <>
       <div className="body">
       <input type="file" onChange={onchange}/><br />
       <div className="container_input">
           <img src={image} />
           </div>
       </div>
        </>
    )
}

export default File;
