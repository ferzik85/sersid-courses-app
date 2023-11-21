import { combineReducers } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/reducer';
import { authorsReducer } from './authors/reducer';

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
});

export default rootReducer;
