import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {

  state: () => ({
    credentials: LoginInit,
    loading: false as Boolean,
    status: false as Boolean,
  }),

  getters: {
  
    // getProductsCount: (state) => state.total,
  
  },

  actions: {
    
    init() {
      LoginInit.email = '';
      LoginInit.password = '';
    },

  }

})

export type TLogin = {
  email: string,
  password: string,
}

export const LoginInit: TLogin = {
  email: '',
  password: '',
}