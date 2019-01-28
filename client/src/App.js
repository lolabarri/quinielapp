import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/home';
import Bet from './pages/bet';
import Matches from './pages/matches';
import Ranking from './pages/ranking';
import User from "./pages/user";

import {Navbar} from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Navbar />
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/bet' component={Bet}/>
          <Route path='/matches' component={Matches}/>
          <Route path='/ranking' component={Ranking}/>
          <Route path='/user' component={User}/>
        </Switch>
      </div>
    );
  }
}

export default App;