import {
  EmailAlreadyPicked,
  UserNotFound,
  WrongPassword,
} from 'domain/authentication/AuthenticationError';
import LoginFormType from 'domain/authentication/LoginFormType';
import RegisterFormType from 'domain/authentication/RegisterFormType';

import AuthenticationService from 'services/authentication/AuthenticationService';

import { auth } from 'services/firebase';

const AuthenticationServiceFirebase: AuthenticationService = {
  login: async (form: LoginFormType) => {
    try {
      const { email, password } = form;
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user!;

      return {
        email: user.email!,
        id: user.uid,
      };
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          throw new UserNotFound();

        case 'auth/wrong-password':
          throw new WrongPassword();

        default:
          throw error;
      }
    }
  },
  register: async (form: RegisterFormType) => {
    try {
      const { email, password } = form;
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user!;

      return {
        email: user.email!,
        id: user.uid,
      };
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          throw new EmailAlreadyPicked();

        default:
          throw error;
      }
    }
  },
  logout: async () => {
    await auth.signOut();
    localStorage.clear();
  },
};

export default AuthenticationServiceFirebase;
