import React from 'react';
import "./Navbar.css";
import { NavLink, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./about";
import Home from "./home";
import Projects from "./projects";
import Contact from "./contact";


const Navbar = () => {
    return (
        <>
        <Router>
        <nav>
        <div className="logo"><h1>Logo</h1></div>
        <ul className="nav_links">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
       
        </ul>
        <div className="search_bar">
            <input type="search" className="search"/>
        </div>
        <div className="hamburger">
            
        </div>
        </nav>
        
        <Switch>
        <Route exact path="/home" activeClassName="active" ><Home /></Route>
        <Route activeClassName="active" path="/about" ><About /></Route>
        <Route activeClassName="active" path="/projects" ><Projects /></Route>
        <Route  activeClassName="active" path="/contact" ><Contact /></Route>
        </Switch>
        </Router>
        </>
    )
}

export default Navbar
