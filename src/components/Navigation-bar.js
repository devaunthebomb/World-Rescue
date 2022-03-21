import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Navigation.css"

function Navigation(){
    return(
        <div className="navigation">
        <nav className="navbar navbar-expand bg-purple" >
          <div className="container "  >
            <div className='WorldRescue'>
            <NavLink className="navbar-brand" to="/">
              <h1 style={{color: "#48cae4"}}> World Rescue </h1>
            </NavLink>
            </div>
            <div className='navigation-buttons nav-b'>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" class="newPos"to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navigation;