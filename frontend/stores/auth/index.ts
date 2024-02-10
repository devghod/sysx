import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';

export const useAuthStore = defineStore({
  id: 'auth',
  state: state,
  actions: actions,
  getters: getters,
});