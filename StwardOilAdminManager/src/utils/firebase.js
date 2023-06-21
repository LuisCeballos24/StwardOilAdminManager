import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebaseConfig from './firebase-config.json';

firebase.initializeApp(firebaseConfig);

export default firebase;