import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJL-JsmLdgOieH51Vca_rCvP1jKgB31Aw",
  authDomain: "clone-d5109.firebaseapp.com",
  databaseURL: "https://clone-d5109.firebaseio.com",
  projectId: "clone-d5109",
  storageBucket: "clone-d5109.appspot.com",
  messagingSenderId: "542836200999",
  appId: "1:542836200999:web:a68fece5e8286a93b22002",
  measurementId: "G-Z4RPN0NRQP"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };