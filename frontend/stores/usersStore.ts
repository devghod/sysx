import { defineStore } from 'pinia';

export const controller = 'users';

export const useUserStore = defineStore('users', {

  state: () => {
    return {
      users: [] as IUserInfo[],
      user: null as IUserInfo | null,
      newUser: {} as INewUserInfo,
      loading: false as Boolean,
      total: 0 as number,
      limit: 10 as number,
      skip: 0 as number,
    }
  },

  getters: {
    
  },

  actions: {

    async fetchUsers(skipNum: number) {
      this.loading = true;

      const config = useRuntimeConfig();
      const result: any = await useFetch(`${config.public.apiBaseUrl}${controller}/get-users`);
      const { data } = result;

      if (data.value) {
        this.users = data.value.users;
        this.total = data.value.total;
        this.skip = skipNum;
      };

      this.loading = false;
    },

    async fetchUser(id: string) {
      this.loading = true;

      const config = useRuntimeConfig();
      const result: any = await useFetch(`${config.public.apiBaseUrl}${controller}/get-user/${id}`);
      const { data } = result;

      if (data.value) {
        this.user = data.value.user;
      };

      this.loading = false;
    },

    async addUser(body: INewUserInfo) {
      this.loading = true;
      console.log('body', body)

      const config = useRuntimeConfig();
      const result: any = await useFetch(`${config.public.apiBaseUrl}${controller}/add-user`,
      {
        method: 'post',
        body: body,
      });
      const { data } = result;
console.log(result);
      // if (data.value) {
      //   this.user = data.value.user;
      // };

      this.loading = false;
    },

  },

})
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