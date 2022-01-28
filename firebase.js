import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAj_4q9drKlPoaDfLInmwIf2bC7QF122Cs",
  authDomain: "rn-uber-eats-clone-yt-a56f9.firebaseapp.com",
  projectId: "rn-uber-eats-clone-yt-a56f9",
  storageBucket: "rn-uber-eats-clone-yt-a56f9.appspot.com",
  messagingSenderId: "316159996979",
  appId: "1:316159996979:web:221feb97b1d67a87559f46",
  measurementId: "G-5E8YX6GNGZ"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


export default firebase;
