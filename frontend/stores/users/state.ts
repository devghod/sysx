export const state = () => ({
  users: [] as IUserInfo[],
  user: null as IUserInfo | null,
  newUser: {} as INewUserInfo,
  loading: false as Boolean,
  total: 0 as number,
  limit: 10 as number,
  skip: 0 as number,
  errorMessage: "" as String,
});

export interface IUserInfo {
  _id: string
  first_name: string
  middle_name: string
  last_name: string
  image: string
  email: string
  password: string
  username: string
  date_created: string
}

export interface INewUserInfo {
  first_name: string
  middle_name: string
  last_name: string
  image: string
  email: string
  username: string
}

export type TNewUserInfo = {
  first_name: string
  middle_name: string
  last_name: string
  image: string
  email: string
  username: string
}

export type TUserInfo = {
  _id: string
  first_name: string
  middle_name: string
  last_name: string
  image: string
  email: string
  password: string
  username: string
  date_created: string
}