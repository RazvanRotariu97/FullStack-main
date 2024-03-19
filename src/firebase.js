// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzZkXR_YadH6-Mp3ncNxZsJPumCu8LBUA",
  authDomain: "proiectfullstack.firebaseapp.com",
  projectId: "proiectfullstack",
  storageBucket: "proiectfullstack.appspot.com",
  messagingSenderId: "1074398668424",
  appId: "1:1074398668424:web:12381993848f864839a13d",
  measurementId: "G-NTV1591KP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);