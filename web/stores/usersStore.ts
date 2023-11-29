import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {

  state: () => {
    return {
      users: [] as UserInfo[],
      user: null as UserInfo | null,
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

      const { data }: any = await useLazyFetch('https://dummyjson.com/users', {
        query: { limit: this.limit, skip: skipNum }
      });

      if (data.value?.users && data.value.users.length > 0) {
        this.users = data.value.users;
        this.total = data.value.total;
        this.skip = skipNum;
      };

      this.loading = false;
    }
  }

})

export interface UserInfo {
  firstName: string
  lastName: string
  address: object
  bank: object
  birthDate: string
  bloodGroup: string
  company: object
  domain: string
  ein: string
  email: string
  eyeColor: string
  gender: string
  hair: object
  height: number
  id: number
  image: string
  ip: string
  macAddress: string
  maidenName: string
  password: string
  phone: string
  ssn: string
  university: string
  userAgent: string
  username: string
  age: number
  weight: number
}