import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Home.css';


export default class Home extends Component{

 
    render() {
        return(
            <div>
          
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <div className="header__option"> <Link to="/header"> 
            <span className="header__optionLineOne">Roshan Airlines</span></Link>
            <span className="header__optionLineTwo">Airline Travels at its Best</span>
          </div>
</nav>
<div className="r6">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
   
  <Link  className="navbar-brand" to="/header">Home</Link >
  <butn className="navbar-ggler" type="butn" data-ggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="ggle navigation">
    <span className="navbar-ggler-icon"></span>
  </butn>
  &emsp;
  &emsp;
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link  className="nav-link" to="/Aboutus">About us <span className="sr-only">(current)</span></Link >
      </li>
      &emsp;
      &emsp;
      <li className="nav-item active">
        <Link  className="nav-link" to="/Schedule">Flight Schedule</Link >
      </li>
      &emsp;
      &emsp;
      <li className="nav-item active" variant="Primary">
        <Link  className="nav-link" to="/contact">Contact us</Link >
      </li>
      &emsp;
      &emsp;
      <li className="nav-item active inline float-right">
        <Link  className="nav-link " to="/registration">Register</Link >
      </li>
      &emsp;
      &emsp;
      <li className="nav-item active inline float-right">
        <Link  className="nav-link " to="/login">Login</Link >
      </li>
      &emsp;
      &emsp;&emsp;
      <li className="nav-item active inline float-right">
        <Link  className="nav-link " to="/Search">Search_Flight</Link >
      </li>
    </ul>
  </div>
</nav>
</div>

        

            </div>
        )
    }
  
}
