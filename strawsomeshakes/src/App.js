import React from 'react';
import {Route, HashRouter} from 'react-router-dom'
import './App.css';
import Home from './components/HomeComp'
import FAQ from './components/FAQComp'
import Contact from './components/ContactComp'


function App() {
  return (
    <HashRouter>
      <Route path="/home" component={Home} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
    </HashRouter>
  );
}

export default App;
