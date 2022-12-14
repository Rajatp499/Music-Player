import React,{useState} from 'react'
import './Review.css';
import {FaLessThan, FaGreaterThan } from 'react-icons/fa';
import data from './ReviewData';

const Review = () => {
    let [id, setId]= useState(0);

    const check=(id)=>{
        if(id> data.length-1){
            return 0;
        }
        else if(id <0){
            return data.length-1;
        }
        // console.log();
    return id;
    }

    const previous=()=>{
        setId(()=>{      
        id= id-1;
        return check(id);
        // return newid;
    })
    }
    const next=()=>{
        setId(()=>{      
        id= id+1;
        return check(id);
        // return newid;
    })
    }

    function suprise(){
        setId((id)=>{

            let rand=   Math.floor(Math.random()*data.length);
            console.log(rand);
            return check(rand);
            // console.log(newid);
        })
        // console.log("axbsb");
    }


    // console.log(id);

    return (
        <>
            <div className="Review_body">
                <div className="Review_title"><u>Our Review</u></div><br /><br />
                <div className="Review_box">
                    <div className="Review_image"><img classNmae="Review_img" style={{borderRadius:'50%'}} src={data[id].img} height="140vh"/></div><br />
                <div className="Review_name">{data[id].name}</div>
                <div className="Review_post">{data[id].post}</div><br />
                <div className="Review_review">{data[id].review}</div>
                <div className="Review_btn"><button className="btn" onClick={previous}><FaLessThan /></button>   <button className="btn" onClick={next}><FaGreaterThan /></button></div>
                <div className="Suprise_me" onClick={suprise}>suprise me</div>
                </div>
            </div>
        </>
    )
}

export default Review;
