import React, { Component } from 'react';
import {Route, HashRouter} from 'react-router-dom'
import './App.css';
import Home from './components/HomeComp'
import FAQ from './components/FAQComp'
import Contact from './components/ContactComp'
import Menu from './components/MenuComp'
import Order from './components/OrderComp'
import Redr from './components/RedirectComp'


class App extends Component{

  render(){
    return (
      <HashRouter>
        <Route path="/" component={Redr} />
        <Route path="/home" component={Home} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        <Route path="/menu" component={Menu} />
        <Route path="/status" component={Order} />
      </HashRouter>
    );
  }
}

export default App;
