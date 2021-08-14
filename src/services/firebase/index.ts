import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/functions';

import { EMULATOR } from 'config/environment';
import config from 'config/firebase.json';

firebase.initializeApp(config);

export const auth = firebase.auth();
export const functions = firebase.functions();

if (EMULATOR) {
  auth.useEmulator('http://localhost:9099');
  functions.useEmulator('localhost', 5001);
}

export const listFunction = functions.httpsCallable('list');
export const favoriteFunction = functions.httpsCallable('favorite');

export {};
