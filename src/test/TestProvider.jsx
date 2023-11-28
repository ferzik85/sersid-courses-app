/* eslint-disable react/prop-types */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from '../store/rootReducer';

export function TestProvider({ children, user, courses, authors, initialEntries = ['/'] }) {
	const store = configureStore({ reducer: rootReducer, preloadedState: { user, courses, authors } });
	return (
		<Provider store={store}>
			<MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
		</Provider>
	);
}
