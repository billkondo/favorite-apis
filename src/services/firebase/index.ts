import firebase from 'firebase/app';

import 'firebase/auth';

import config from 'config/firebase.json';

firebase.initializeApp(config);

export const auth = firebase.auth();

if (process.env.REACT_APP_EMULATOR) {
  auth.useEmulator('http://localhost:9099');
}

export {};
