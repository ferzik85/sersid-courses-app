/* eslint-disable default-param-last */
import { ADD_AUTHOR, DELETE_AUTHOR, SAVE_AUTHORS } from './types';

export const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case SAVE_AUTHORS:
			return action.payload;

		case ADD_AUTHOR:
			return [...state, action.payload];

		case DELETE_AUTHOR:
			return state.filter((course) => course.id !== action.payload);

		default:
			return state;
	}
};
