import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import * as firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
