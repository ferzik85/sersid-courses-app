import { configureStore } from '@reduxjs/toolkit';
import { coursesInitialState } from './courses/reducer';
import { authorsInitialState } from './authors/reducer';
import { userInitialState } from './user/reducer';

import rootReducer from './rootReducer';

const preloadedState = {
	user: userInitialState,
	courses: coursesInitialState,
	authors: authorsInitialState,
};

const store = configureStore({ reducer: rootReducer, preloadedState });

export default store;
