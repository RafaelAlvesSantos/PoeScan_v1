import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar title="PoE.Scan" icon="fab fa-github" />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
