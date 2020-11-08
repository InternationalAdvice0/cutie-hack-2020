import { firebase, loginUser, logoutUser, registerUser } from './auth.js';
const emailField = document.querySelector('#loginFormEmail');
const pwField = document.querySelector('#loginFormPassword');
const form = document.querySelector('#loginForm');

if (form && emailField && pwField) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    loginUser(emailField.value, pwField.value);
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        return onSuccessLogin();
      } else {
        console.log('no user');
      }
    });
  });
}

function onSuccessLogin() {
  location.href = '/employee-tinder.html';
}

if (firebase.auth().currentUser) {
  onSuccessLogin();
}
