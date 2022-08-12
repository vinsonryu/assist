// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpCHdfALdvYHicWWj1zXvyjvude1CjYAw",
  authDomain: "redash-c7fea.firebaseapp.com",
  projectId: "redash-c7fea",
  storageBucket: "redash-c7fea.appspot.com",
  messagingSenderId: "1088151329799",
  appId: "1:1088151329799:web:3d72c636e3f9b693055ea2",
  measurementId: "G-LHSV6825KJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore =  firebase.firestore();