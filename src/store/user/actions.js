import { LOGIN_USER, LOGOUT_USER } from './types';

export const loginUserAction = (payload) => ({ type: LOGIN_USER, payload });
export const logoutUserAction = () => ({ type: LOGOUT_USER });
