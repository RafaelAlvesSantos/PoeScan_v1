import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterState from "./context/characters/CharacterState";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Characters from "./components/characters/Characters";
import "./App.css";

function App() {
  return (
    <CharacterState>
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
    </CharacterState>
  );
}

export default App;
