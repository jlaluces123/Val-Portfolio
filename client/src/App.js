import React from 'react';
import logo from './logo.svg';
import './App.css';

// Component imports
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Navigation here */}
      </header>

      <main>
        <h2>Hello World</h2>
        {/* <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/" component = {Contact} />
        </Switch> */}
      </main>
    </div>
  );
}

export default App;
