import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
//import Article from "./components/pages/Article";
import mongo from "./utils/mongo";

class App extends Component {
  state = {
    signedIn: false,
    googleID: "",
    firstName: "",
    lastName: "",
    email: "",
    imageURL: ""
  };

  successfulSignIn = (response) => {
    console.log("successfulSignIn");
    //console.log(response);
    //console.log(response.profileObj);
    this.setState({
      signedIn: true,
      googleID: response.profileObj.googleId,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      email: response.profileObj.email,
      imageURL: response.profileObj.imageUrl
    });
    mongo.setUser({
      googleID: response.profileObj.googleId,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      email: response.profileObj.email,
      imageURL: response.profileObj.imageUrl
    });
  }

  unsuccessfulSignIn = (response) => {
    console.log("unsuccessfulSignIn");
    console.log(response);
  }

  onSignOut = (response) => {
    console.log("onSignOut");
    console.log(response);
    this.setState({
      signedIn: false,
      googleID: "",
      firstName: "",
      lastName: "",
      email: "",
      imageURL: ""
    });
  }

  render() {
    return (<Router>
      <div className="App">
        <header className="container-fluid">
          <NavBar signedIn={this.state.signedIn} 
                  onSignOut={this.onSignOut}
                  name={this.state.firstName} />
        </header>

        <section className="container-fluid">

          {this.state.signedIn ?
            <div>
              <Route path="*" render={(props) => <Search {...props} userGoogleID={this.state.googleID} />} />
            </div>
            :
            <Route path="*" render={(props) => <Home {...props} successfulSignin={this.successfulSignIn} unsuccessfulSignIn={this.unsuccessfulSignIn} />} />
          }
        </section>

        <footer className="container-fluid">
          <Footer />
        </footer>
      </div>
    </Router>);
  }
}


export default App;
