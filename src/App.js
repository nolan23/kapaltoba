import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Marselo from './Marselo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Marselo} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
