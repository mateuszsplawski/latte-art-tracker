interface LoginPayload {
  email: string;
  password: string;
}

type SignUpPayload = LoginPayload;

interface ResetPasswordPayload {
  email: string;
}

export type { LoginPayload, SignUpPayload, ResetPasswordPayload };
