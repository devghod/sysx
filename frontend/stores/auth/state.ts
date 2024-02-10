export const state = () => ({
  authenticated: false,
  credentials: LoginInit,
  loading: false as Boolean,
  errorMessage: "" as String,
  token: "" as String,
  profile: {} as Object
});

export type TLogin = {
  username: string,
  password: string,
}

export const LoginInit: TLogin = {
  username: '',
  password: '',
}