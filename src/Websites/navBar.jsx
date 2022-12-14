import React from 'react';
import './navBar.css';
import { BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';
// import Docs from './Links/Docs';
import { FaReact } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
// import '.../node_module/'
// import Button from 'react-bootstrap/Button';


const navBar = () =>{



    return(
        <>
        
    <div className="nav">
    {/* <span className="icon-React"> */}
    <NavLink to="/" ><FaReact className="icon-react" />&nbsp;<span className="React">React</span></NavLink>
    {/* </span> */}
        <ul className="ul_navBar">
        <NavLink exact to="/" activeClassName="active-link"><li >Home</li></NavLink>
        <NavLink to="/docs" activeClassName="active-link"><li >Docs</li></NavLink>
        <NavLink to="/tutorial" activeClassName="active-link"><li >Tutorial</li></NavLink>
        <NavLink to="/blog" activeClassName="active-link"><li >Blog</li></NavLink>
        <NavLink to="/community" activeClassName="active-link"><li >Community</li></NavLink>
        </ul>
        <BsSearch  style={{position:'relative',left:'8rem',top:'4px',color:"white",fontWeight:'700'}}/><input type="search" className="input-search" maxLength="18" placeholder="Search.." />
    </div>

        </>
    )
}

export default navBar;