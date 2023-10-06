import React,{useContext,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes , Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { authContext } from './store/Context';
import {  onAuthStateChanged} from 'firebase/auth'; 
import { auth } from './firebase/config'; 
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
function App() {
  const { user,setUser } = useContext(authContext);

  useEffect(() => {
    console.log(user);
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    });
  }, [user,setUser]);
  return (
    <div>
      <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/signup" element={<Signup />} />
          <Route  path="/login" element={<Login />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
