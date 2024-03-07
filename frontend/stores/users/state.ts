import { TUserInfo, UserInit  } from './types';

export const state = () => ({
  users: [] as TUserInfo[],
  user: UserInit as TUserInfo | null,
  loading: false as Boolean,
  total: 0 as number,
  limit: 10 as number,
  skip: 0 as number,
  errorMessage: "" as String,
  status: "" as String,
  succesMessage: "" as String,
  total_users: 0,
  total_users_active: 0,
  total_users_deactive: 0
});