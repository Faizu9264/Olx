import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes , Route } from 'react-router-dom'
import Signup from './Pages/Signup'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/signup' Component={Signup}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
