import { User } from "firebase/auth";
import { useState } from "react";
import {
  login as firebaseLogin,
  signUp as firebaseSignUp,
  resetPassword as firebaseResetPassword,
  getUserData as firebaseGetUserData,
  logout as firebaseLogout,
} from "../services/firebaseAuthentication";
import {
  LoginPayload,
  ResetPasswordPayload,
  SignUpPayload,
} from "../services/firebaseAuthentication.types";

export const useAuthentication = () => {
  const [userData, setUserData] = useState<User | null>(null);

  const login = async ({ email, password }: LoginPayload) => {
    await firebaseLogin({ email, password });
  };

  const register = ({ email, password }: SignUpPayload) =>
    firebaseSignUp({ email, password });

  const resetPassword = ({ email }: ResetPasswordPayload) =>
    firebaseResetPassword({ email });

  const logout = async () => {
    await firebaseLogout();
  };

  firebaseGetUserData((user) => setUserData(user));

  const isUserAuthenticated = !!userData;

  return {
    login,
    register,
    resetPassword,
    logout,
    userData,
    isUserAuthenticated,
  };
};
