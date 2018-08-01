import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
//import Article from "./components/pages/Article";

class App extends Component {
  state = {
    signedIn: false
  };

  render() {
    console.log("rendered: ");
    return (<Router>
      <div className="App">
        <header className="container-fluid">
          <NavBar signedIn={this.state.signedIn} />
        </header>

        <section className="container-fluid">
          <Route exact path="/" component={Home} />
          <Route exact path="/signOut" component={Home} />
          <Route path="/search/:id" component={Search} />
          {/*<Route exact path="/game/easy" render={(props) => <Game {...props} difficulty="easy" />} />
        <Route exact path="/game/medium" render={(props) => <Game {...props} difficulty="medium" />} />
<Route exact path="/game/hard" render={(props) => <Game {...props} difficulty="hard" />} />*/}
        </section>

        <footer className="container-fluid">
          <Footer />
        </footer>
      </div>
    </Router>);
  }
}


export default App;
