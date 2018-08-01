import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = (props) => (
    <nav className="navbar navbar-expand-md navbar-light">
        <h2 className="navbar-brand NavBar-MyBrand" >
            NYT Article Search & Save
        </h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    {props.signedIn ?
                        <Link to="/" className="btn btn-primary btn-sm" >
                            "Sign Out"</Link> :
                        <a href="/signin" className="btn btn-primary btn-sm" >
                            Sign In
                    </a>
                    }
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;