import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import logo from './logo.svg';


import Main from './pages/Main';
import NoMatch from "./pages/NoMatch";



class App extends Component {
  render() {
   return (
    <Router className="router">
      <Switch>

        <Route path="/" component={Main} />
        <Route path="*" component={NoMatch} />

      </Switch>
    </Router>
    );
  }
}

export default App;
