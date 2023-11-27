import { LOGIN_USER, LOGOUT_USER } from './types';

export const loginUserAction = (payload) => ({ type: LOGIN_USER, payload });
export const logoutUserAction = (payload) => ({ type: LOGOUT_USER, payload });
