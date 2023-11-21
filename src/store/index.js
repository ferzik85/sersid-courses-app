import { configureStore } from '@reduxjs/toolkit';
import { coursesInitialState } from './courses/reducer';
import { authorsInitialState } from './authors/reducer';
import rootReducer from './rootReducer';

const preloadedState = {
	courses: coursesInitialState,
	authors: authorsInitialState,
};

const store = configureStore({ reducer: rootReducer, preloadedState });

export default store;
