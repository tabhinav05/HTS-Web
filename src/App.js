import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login  from './pages/login/login';
import Home from './pages/home/home'
import ListingsPage from './pages/listings-page/listings-page';
import Yourorder from './pages/your-order/your-order';
import Delivery from './pages/delivery/delivery';
import CollectfromStore from './pages/collect-from-store/collect-from-store'

function App() {
  return (
    <Router>
    <div>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/listings-page' component={ListingsPage} />
      <Route path='/your-order' component={Yourorder} />
      <Route path='/delivery' component={Delivery} />
      <Route path='/collect-from-store' component={CollectfromStore} />
    </Switch>  
    </div>
    </Router>
    
  );
}

export default App;
