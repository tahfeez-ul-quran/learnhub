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

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdWXljc4GS9kWcNUo-QTWIEF1Lzeo-owg",
  authDomain: "learn-hub-quran.firebaseapp.com",
  databaseURL: "https://learn-hub-quran-default-rtdb.firebaseio.com",
  projectId: "learn-hub-quran",
  storageBucket: "learn-hub-quran.firebasestorage.app",
  messagingSenderId: "795140160592",
  appId: "1:795140160592:web:f761eaa4043ad0e73f2555",
  measurementId: "G-6G90VGC6CC"
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
