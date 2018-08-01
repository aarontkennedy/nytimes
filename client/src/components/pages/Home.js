import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
    <div className="container mt-5">
        <div className="row">
            <div className="col-12 col-md-6">
                <h1 className="text-center mt-3">
                    New York Times
                </h1>
                <h1 className="text-center mt-3">
                    Article Search & Save
                </h1>
                <p className="mt-4">
                    Sign in with a Google account and start searching articles from the New York Times.  Save and share the ones you like the best.</p>
                <div className="text-center mt-4 mb-4">
                    <a href="/signin" className="btn btn-primary btn-lg" >
                        Sign In
                    </a>
                    <a href="/api/add">api</a>
                </div>

            </div>
            <div className="col-12 col-md-6">
                <img className="Home" alt="NYT" src="/images/nyt.png"/>
            </div>
        </div>
    </div>
);

export default Home;