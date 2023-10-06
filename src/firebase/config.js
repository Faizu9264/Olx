import {initializeApp}  from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAjnwWxg3w0d_SQOP0vLvuvnaZHt3vv-Sw",
    authDomain: "olx-clone-98fe7.firebaseapp.com",
    projectId: "olx-clone-98fe7",
    storageBucket: "olx-clone-98fe7.appspot.com",
    messagingSenderId: "1034342643303",
    appId: "1:1034342643303:web:2ca21df7676e34bb8a46c2",
    measurementId: "G-X7GJ4K4XEE"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp); 
  const firestore = getFirestore(firebaseApp); 
  
  export { firebaseApp, auth, firestore };