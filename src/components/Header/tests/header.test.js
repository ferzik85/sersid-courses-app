/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../Header';
import store from '../../../store';
import '@testing-library/jest-dom';

describe('Header', () => {
	test('Header should have logo', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Header />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		);

		expect(screen.getByAltText('epam logo')).toBeInTheDocument();
	});

	test('Header should have user name', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Header />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		);
	});
});
