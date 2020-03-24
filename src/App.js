import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Characters from "./components/characters/Characters";
import "./App.css";

function App() {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    getCharacterLadder();
    //eslint-disable-next-line
  }, []);

  const getCharacterLadder = async () => {
    const res = await axios.get(
      "http://api.pathofexile.com/ladders/Delirium?limit=10"
    );
    setChars(res.data.entries);
  };

  return (
    <Router>
      <div className="App">
        <Navbar title="PoE.Scan" />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Characters {...props} chars={chars} />}
            />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
