// ==========================================
// LEARN HUB - FIREBASE CONFIGURATION
// ==========================================

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ==========================================
// YOUR FIREBASE PROJECT CONFIGURATION
// ==========================================

// IMPORTANT:
// یہاں اپنی Firebase Web App کی اصل configuration
// paste کرنی ہے۔

const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain:
    "YOUR_PROJECT.firebaseapp.com",

  projectId:
    "YOUR_PROJECT_ID",

  storageBucket:
    "YOUR_PROJECT.appspot.com",

  messagingSenderId:
    "YOUR_MESSAGING_SENDER_ID",

  appId:
    "YOUR_APP_ID"

};


// ==========================================
// INITIALIZE FIREBASE
// ==========================================

const app =
  initializeApp(firebaseConfig);


// Firebase Authentication
export const auth =
  getAuth(app);


// Firestore Database
export const db =
  getFirestore(app);
