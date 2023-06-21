import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import firebaseConfig from './firebase-config.json';

const app = firebase.initializeApp(firebaseConfig, "firebaseConfig");

const auth = app.auth();
const db = app.firestore();
const storage = app.storage();

export { auth, db, storage};