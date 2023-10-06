import {initializeApp}  from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


  const firebaseConfig = {
    apiKey: "AIzaSyAtkW7urx_UL-k4ari3YEoI_b_fM-Y_74o",
    authDomain: "olx-clone-6dec0.firebaseapp.com",
    projectId: "olx-clone-6dec0",
    storageBucket: "olx-clone-6dec0.appspot.com",
    messagingSenderId: "645256243069",
    appId: "1:645256243069:web:74987ea8103c80f6d64e14",
    measurementId: "G-RWVX8ZX2XH"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp); 
  const firestore = getFirestore(firebaseApp); 
  
  export { firebaseApp, auth, firestore };