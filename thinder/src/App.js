import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import Livestream from './LiveStream';


class App extends Component {
  render() {
    return (
    <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
    </Router>
    );





  }
}

export default App;
