import React from 'react'
import "./Props.css";

//CSS


const Props = (props) => {
  return (
    <>
        <div className='props'>
            <div  className='navbar'>
                <div className='nav logo'>{props.logo}</div>
                <div className='dtbc'>
                <div className='nav 1'>{props.nav1}</div>
                <div className='nav 2'>{props.nav2}</div>
                <div className='nav 3'>{props.nav3}</div>
                <div className='nav 4'>{props.nav4}</div>
                </div>
                <div className='nav search'><input type="search" results='6' placeholder='Search' /></div>
                <div className='lg'>
                <div className='nav 5'>{props.nav5}</div>
                <div className='nav 6'>{props.nav6}</div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Props