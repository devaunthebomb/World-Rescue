import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation(){
    return(
        <div className="navigation">
        <nav className="navbar navbar-expand bg-purple" >
          <div className="container "  >
            <NavLink className="navbar-brand" to="/">
              <h1 style={{color: "#48cae4"}}> World Rescue </h1>
            </NavLink>
            <div className='navigation-buttons'>
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