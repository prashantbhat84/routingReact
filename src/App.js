import React from 'react';

import Shop from './components/Shop';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
//import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/shop' component={Shop} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
