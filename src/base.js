import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_79c5e-3OvN1ttQSNfxbTCtrh3oIvqZQ",
  authDomain: "catch-of-the-day-nick-white.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-nick-white-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
