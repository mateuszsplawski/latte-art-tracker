import {
  login as firebaseLogin,
  signUp as firebaseSignUp,
  resetPassword as firebaseResetPassword,
  logout as firebaseLogout,
} from '../services/firebaseAuthentication';
import {
  LoginPayload,
  ResetPasswordPayload,
  SignUpPayload,
} from '../services/firebaseAuthentication.types';

export const useAuthentication = () => {
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

  return {
    login,
    register,
    resetPassword,
    logout,
  };
};
