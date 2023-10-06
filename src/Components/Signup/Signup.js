import React, { useContext, useState } from 'react';

import { useNavigate,Link } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { auth, firestore } from '../../firebase/config'; 
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { collection, addDoc } from 'firebase/firestore'; 
export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

const navigate = useNavigate()
const HandleSubmit = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password) 
  .then((result) => {
    const userRef = collection(firestore, 'users');
    addDoc(userRef, {
      id: result.user.uid,
      username: username,
      phone: phone,
    }).then(() => {
        navigate('/login');
        console.log("User registered successfully.");
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
    });
}
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo"></img>
        <form onSubmit={HandleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        {/* <Link>Login</Link> */}
      </div>
    </div>
  );
}
