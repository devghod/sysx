import { defineStore } from 'pinia';
import { useLoanState } from './state';
import { useLoanGetters } from './getters';
import { useLoanSetters } from './setters';
import { useLoanActions } from './actions';
import { useLoanMutations } from './mutations';

export const useLoanStore = defineStore('loan', {
  ...useLoanState(),
  ...useLoanGetters(),
  ...useLoanSetters(),
  ...useLoanActions(),
  ...useLoanMutations(),
});