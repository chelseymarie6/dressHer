import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Main from './pages/Main';
import NoMatch from "./pages/NoMatch";
import Navigation from "./pages/Navigation";


class App extends Component {
  render() {
   return (
    <Router className="router">
      <Switch>

        <Route path="/main" component={Main} />
        <Route path="*" component={NoMatch} />

      </Switch>
    </Router>
    );
  }
}

export default App;
