import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import 'firebase/compat/database';
import firebaseConfig from './firebase-config.json';

const app = firebase.initializeApp(firebaseConfig, "firebaseConfig");

const auth = app.auth();
const db = app.firestore();
const storage = app.storage();
const dbs = app.database();

export { auth, db, storage, dbs };