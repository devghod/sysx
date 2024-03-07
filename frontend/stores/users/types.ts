export type TNewUserInfo = {
  first_name: String
  middle_name: String
  last_name: String
  image: String
  email: String
  username: String
  password: String,
  status: String,
  gender: String,
}

export type TUserInfo = {
  _id: String
  first_name: String
  middle_name: String
  last_name: String
  image: String
  email: String
  password: String
  username: String
  date_created: String
  status: String
  gender: String
}

export const UserInit: TNewUserInfo = {
  first_name: "",
  middle_name: "",
  last_name: "",
  image: "",
  email: "",
  username: "",
  password: "Admin@123", // Default password,
  status: "",
  gender: "",
}