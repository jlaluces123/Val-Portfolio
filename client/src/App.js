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
    work: false,
    collab: false,
    about: false,
    contact: false,
  };

  componentDidMount() {
    this.readPage();
  }

  handleMenu = (e) => {
    e.preventDefault();
    this.setState({ visible: !this.state.visible });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("update occurred");
    // this.readPage();
  }

  /*
    Current Issue:
      - Only checks once from componentDidMount()
        - ex) if i switch to /about from / it will render / as the black text
      - Find a way to update and make a call each time the page is redirected
  */
  readPage = (e) => {
    let currentPage = window.location.pathname;

    if (currentPage === "/") {
      this.setState({
        work: true,
        collab: false
      });
    } else if (currentPage === "/collaborations") {
      this.setState({
        collab: true,
        work: false,
      });
    };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Navigation here */}
          <Navigation
            handleMenu = {this.handleMenu}
            visible = {this.state.visible}
            work = {this.state.work}
            collab = {this.state.collab}
            about = {this.state.about}
            contact = {this.state.contact}
          />
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
