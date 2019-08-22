import React from 'react';
import './App.css';

// Module imports
import { Route, Switch } from "react-router-dom";

// Component Imports
import Navigation from "./components/Navigation/index.js";
import Home from "./components/Home/index.js";
import Collaborations from './components/Collaborations/index.js';
import Footer from "./components/Footer/index.js";

class App extends React.Component {
  state = {
    visible: false,
  };

  handleMenu = (e) => {
    e.preventDefault();
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Navigation here */}
          <Navigation handleMenu = {this.handleMenu} visible = {this.state.visible} />
        </header>

        <main>
          <div className="content__wrapper">
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/collaborations" component = {Collaborations} />
            </Switch>
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }

}

export default App;
