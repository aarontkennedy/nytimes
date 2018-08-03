import React from "react";
//import { Link } from "react-router-dom";
import './NavBar.css';
import { GoogleLogout } from 'react-google-login';

const NavBar = (props) => (
    <nav className="navbar row">
        <h4 className="col-9 col-md-7 NavBar-MyBrand text-left" >
            NYT Article Search & Save
        </h4>
        <div className="col-3 col-md-5 text-right" >
            <span className="d-none d-md-inline">{props.name ? `Welcome, ${props.name}. ` : ""}</span>
            {props.signedIn ?
                <GoogleLogout
                    className="btn btn-primary btn-sm"
                    buttonText="Sign Out"
                    onLogoutSuccess={props.onSignOut}
                >
                </GoogleLogout>
                : ""
            }
        </div>
    </nav>
);

export default NavBar;