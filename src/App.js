import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Characters from "./components/characters/Characters";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar title="PoE.Scan" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Characters} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
