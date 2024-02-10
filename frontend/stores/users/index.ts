import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';

export const useUserStore = defineStore({
  id: 'users',
  state: state,
  actions: actions,
  getters: getters,
});