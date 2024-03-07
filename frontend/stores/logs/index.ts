import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';

export const useLogStore = defineStore({
  id: 'logs',
  state: state,
  actions: actions,
  getters: getters,
});