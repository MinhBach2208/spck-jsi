// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYxYkewfRMIDUOlSKmgR0Ywx1ctLUCbEc",
    authDomain: "spck-9174c.firebaseapp.com",
    projectId: "spck-9174c",
    storageBucket: "spck-9174c.appspot.com",
    messagingSenderId: "44209465860",
    appId: "1:44209465860:web:dffcabd2483e213c26a351"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//auto xac thuc cho app
export const auth = getAuth(app);