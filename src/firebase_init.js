
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCYJo0zLCwLrno7rh7XkADOOmKsIAvMoT0",
    authDomain: "bytebase-tech.firebaseapp.com",
    projectId: "bytebase-tech",
    storageBucket: "bytebase-tech.appspot.com",
    messagingSenderId: "45134401319",
    appId: "1:45134401319:web:ef1f0598a317cffc3a2302",
    measurementId: "G-PPPLMLPJ0M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // initialise cloud firestore
  const db = getFirestore(app);

  export {db};