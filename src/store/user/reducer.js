/* eslint-disable default-param-last */
import { LOGIN_USER, LOGOUT_USER } from './types';

function createUser(isAuth, name, email, token, role) {
	return {
		isAuth,
		name,
		email,
		token,
		role,
	};
}

function logoutUser() {
	return createUser(false, '', '', '', '');
}

function loginUser({ name, email, token, role }) {
	return createUser(true, name, email, token, role);
}

export const userInitialState = logoutUser();

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return loginUser(action.payload);

		case LOGOUT_USER:
			return logoutUser();

		default:
			return state;
	}
};
