import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  NextFn,
  User,
} from 'firebase/auth';

import { firebase } from 'lib/shared';
import {
  LoginPayload,
  ResetPasswordPayload,
  SignUpPayload,
} from './firebaseAuthentication.types';

const firebaseAuth = getAuth(firebase);

const signUp = ({ email, password }: SignUpPayload) =>
  createUserWithEmailAndPassword(firebaseAuth, email, password);

const login = ({ email, password }: LoginPayload) =>
  signInWithEmailAndPassword(firebaseAuth, email, password);

const logout = () => signOut(firebaseAuth);

const resetPassword = ({ email }: ResetPasswordPayload) =>
  sendPasswordResetEmail(firebaseAuth, email);

const getUserData = (callback: NextFn<User | null>) =>
  onAuthStateChanged(firebaseAuth, callback);

export { signUp, login, logout, resetPassword, getUserData };
