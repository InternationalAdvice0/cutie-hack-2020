import 'regenerator-runtime/runtime';

import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function registerUser(email, password, profileData) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res =>
      db.collection('users').add({ ...profileData, uid: res.user.uid })
    )
    .catch(error => {
      console.error(error);
    });

  loginUser(email, password);
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
