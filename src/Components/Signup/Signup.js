import React, { useState } from 'react';

import { useNavigate,Link} from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { auth, firestore } from '../../firebase/config'; 
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'; 
import { collection, addDoc } from 'firebase/firestore'; 
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

const navigate = useNavigate()
const HandleSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const userRef = collection(firestore, 'users');
    await updateProfile(result.user, { displayName: username });
    await addDoc(userRef, {
      id: result.user.uid,
      displayName: username,
      phoneNumber: phone,
    });
    console.log("User registered successfully.");
    navigate('/login');
  } catch (error) {
    setError(error.message);
  }
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
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo"></img>
        <form onSubmit={HandleSubmit}>
        {error && (
          <div className="error">
            {splitTextIntoChunks(error, 28).map((chunk, index) => (
              <p key={index}>{chunk}</p>
            ))}
          </div>
        )}
        <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            placeholder="John"
            autoComplete="username"
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
            autoComplete="email"
      
          />
          <br />
          <label>Phone Number</label>
          <br />
          <PhoneInput
            international
            defaultCountry="IN" 
            value={phone}
            onChange={(value) => setPhone(value)}
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            autoComplete="phone"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            autoComplete="current-password"
       
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/'>Login</Link>
      </div>
    </div>
  );
}
