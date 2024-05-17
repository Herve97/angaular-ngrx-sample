import { AuthStateInterface } from '../types/authState.interface';

export const selectFeature = (state: { auth: AuthStateInterface }) =>
  state.auth;
