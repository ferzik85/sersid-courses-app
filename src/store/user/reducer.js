/* eslint-disable default-param-last */
import { LOGIN_USER, LOGOUT_USER } from './types';

export const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

const logoutUser = userInitialState;

function loginUser(state, user) {
	return {
		...state,
		isAuth: true,
		...user,
	};
}

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return loginUser(state, action.payload);

		case LOGOUT_USER:
			return logoutUser;

		default:
			return state;
	}
};
