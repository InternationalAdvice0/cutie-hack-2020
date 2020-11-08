import { auth, db } from './auth.js';

const nameElement = document.querySelector('#userName');
const picElement = document.querySelector('#userPic');
async function getUserData() {
  try {
    db.collection('users')
      .get()
      .then(query =>
        query.forEach(item => {
          const userData = item.data();
          nameElement.textContent = `${userData.name}, ${userData.age}`;
          picElement.src = userData.photoURL;
          picElement.setAttribute('alt', `Picture of ${userData.name}`);
        })
      );
    console.log(firstUser);
  } catch (error) {
    console.log('what');
  }
}

getUserData();
