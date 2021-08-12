import {
  EmailAlreadyPicked,
  UserNotFound,
  WrongPassword,
} from 'domain/authentication/AuthenticationError';
import LoginFormType from 'domain/authentication/LoginFormType';
import RegisterFormType from 'domain/authentication/RegisterFormType';
import UserType from 'domain/user/UserType';

import AuthenticationService from 'services/authentication/AuthenticationService';

// The main purpose of this module is to make development easy
// It's NOT supposed to be used in production environment

type SavedUser = {
  email: string;
  id: string;
  passoword: string;
};

const USERS_LOCAL_STORAGE_KEY = 'local_users';
const USERS_COUNT_LOCAL_STORAGE_KEY = 'local_users_count';

const readLocalUsers = (): Array<SavedUser> => {
  const savedLocalUsers = localStorage.getItem(USERS_LOCAL_STORAGE_KEY);
  const localUsers = !savedLocalUsers
    ? []
    : (JSON.parse(savedLocalUsers) as Array<SavedUser>);

  return localUsers;
};

const createAndSaveLocalUser =
  (localUsers: Array<SavedUser>) =>
  (form: RegisterFormType): UserType => {
    const savedUsersCount = localStorage.getItem(USERS_COUNT_LOCAL_STORAGE_KEY);
    const usersCount = (!savedUsersCount ? 0 : parseInt(savedUsersCount)) + 1;

    const user: UserType = {
      email: form.email,
      id: usersCount.toString(),
    };

    const savedUser: SavedUser = {
      email: form.email,
      id: usersCount.toString(),
      passoword: form.password,
    };

    localStorage.setItem(
      USERS_LOCAL_STORAGE_KEY,
      JSON.stringify(localUsers.concat(savedUser))
    );

    localStorage.setItem(
      USERS_COUNT_LOCAL_STORAGE_KEY,
      JSON.stringify(usersCount)
    );

    return user;
  };

const AuthenticationServiceLocal: AuthenticationService = {
  login: async (form: LoginFormType) => {
    const localUsers = readLocalUsers();
    const user = localUsers.find((user) => user.email === form.email);

    if (!user) throw new UserNotFound();
    if (user.passoword !== form.password) throw new WrongPassword();

    return {
      email: user.email,
      id: user.id,
    };
  },
  register: async (form: RegisterFormType) => {
    const localUsers = readLocalUsers();
    const user = localUsers.find((user) => user.email === form.email);

    if (!!user) throw new EmailAlreadyPicked();

    return createAndSaveLocalUser(localUsers)(form);
  },
  logout: async () => {
    const localStorageKeys = Object.keys(localStorage);

    for (const key of localStorageKeys)
      if (
        key !== USERS_COUNT_LOCAL_STORAGE_KEY &&
        key !== USERS_LOCAL_STORAGE_KEY
      )
        localStorage.removeItem(key);
  },
};

export default AuthenticationServiceLocal;
