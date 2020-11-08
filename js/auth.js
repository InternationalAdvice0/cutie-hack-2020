import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function registerUser(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => console.log(res))
    .catch(error => {
      console.error(error);
    });
}

function loginUser(email, password) {
  logoutUser();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      console.error(error);
    });
}

function logoutUser() {
  console.log('log out');
  return firebase.auth().signOut();
}

export { logoutUser, loginUser, registerUser, firebase, db };
export default firebase;
