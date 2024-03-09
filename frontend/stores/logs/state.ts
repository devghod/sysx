import { TLogInfo } from './types';

export const state = () => ({
  logs: [] as TLogInfo[],
  loading: false as Boolean,
  total: 0 as Number,
  limit: 0 as Number,
  skip: 0 as Number,
  errorMessage: String,
  successMessage: String,
  success: Boolean
});