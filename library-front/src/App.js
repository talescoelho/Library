import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './css/App.css'

import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
