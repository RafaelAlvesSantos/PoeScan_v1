import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterState from "./context/characters/CharacterState";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Character from "./components/characters/CharacterItem";
import "./App.css";

function App() {
  return (
    <CharacterState>
      <Router>
        <div className="App">
          <Navbar title="PoE.Scan" icon="fab fa-github" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Character} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </CharacterState>
  );
}

export default App;
