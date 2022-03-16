import React from 'react';
import {NavLink} from 'react-router-dom';
import Wallet from './wallet_connection/WalletConnection';


function Navigation(){
    return(
        <div className={"navigation"}>
        <nav className="navbar navbar-expand navbar-red bg-info newPos" >
          <div className="container " class="newPos" >
            <div>
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
                <li>
                  <Wallet></Wallet>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navigation;