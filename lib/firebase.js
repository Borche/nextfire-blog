import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATspV2zSYF74DxDFhOUBFJHPrtjhtjzuQ",
  authDomain: "nextfire-blog-f4c78.firebaseapp.com",
  projectId: "nextfire-blog-f4c78",
  storageBucket: "nextfire-blog-f4c78.appspot.com",
  messagingSenderId: "198848539827",
  appId: "1:198848539827:web:250b40c93e2ce0b56214c6",
  // measurementId: "G-66K0K7BXQC",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
