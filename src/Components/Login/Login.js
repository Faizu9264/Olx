import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import {useNavigate,Link} from 'react-router-dom'

import { auth } from '../../firebase/config'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
 const handleLogin = async (e)=>{
   e.preventDefault();
   signInWithEmailAndPassword(auth, email, password).then(()=>{
    navigate('/')
   }).catch((error)=>{
    setError(error.message)
   })

 }
 const splitTextIntoChunks = (text, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }
  return chunks;
};
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='Login'></img>
        <form onSubmit={handleLogin}>
        {error && (
          <div className="error">
            {splitTextIntoChunks(error, 28).map((chunk, index) => (
              <p key={index}>{chunk}</p>
            ))}
          </div>
        )}
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{setEmail((e.target.value))}}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword((e.target.value))}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
