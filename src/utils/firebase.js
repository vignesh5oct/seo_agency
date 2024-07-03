// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyCTP_pvjA8YodEHo-9MfkH6K9WO_g7uM",
  authDomain: "seoagency-22073.firebaseapp.com",
  projectId: "seoagency-22073",
  storageBucket: "seoagency-22073.appspot.com",
  messagingSenderId: "466648295123",
  appId: "1:466648295123:web:311ff910f0587c68005626",
  measurementId: "G-78PH653V02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);