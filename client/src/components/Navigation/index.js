import React from 'react';
import "./navigation.css";

// Module imports
import { NavLink, Link } from "react-router-dom";

const Navigation = (props) => {
  console.log(window.location.pathname === "/"); //yields: "/js" (where snippets run)


  return (
    <div className="navigation">
      <div className="left">
        <h2 className="logo"><Link className = "logo__link" to = "/">VALERIE M.</Link></h2>
        <span className="left__description">Photographer • Los Angeles</span>
      </div>

      <div className="right">
        {/*
          - handleMenu will use a visibility flag in App.js' state to display the menu when true
          - className checks visibility state and displays the correct className when needed
        */}
        <span onClick = {props.handleMenu} className = {props.visible ? "close" : "nav__menu"}>&#9776;</span>
        <nav className = {props.visible ? "hidden__menu" : "menu"}>
          <li><NavLink className = {props.work ? "nav__link current__page" : "nav__link"} exact to = "/">Work</NavLink></li>
          <li><NavLink className = {props.collab ? "nav__link current__page" : "nav__link"} to = "/collaborations">Collaborations</NavLink></li>
          <li><NavLink className = {props.about ? "nav__link current__page" : "nav__link"} to = "/about">About</NavLink></li>
          <li><NavLink className = {props.contact ? "nav__link current__page" : "nav__link"} to = "/contact">Contact</NavLink></li>
        </nav>
      </div>
    </div>
  ); // return statement

} // component end

export default Navigation;