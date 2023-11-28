/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { TestProvider } from '../../../test';
import { userTokenIsSet } from '../../../localStorage/StorageAccess';
import Header from '../Header';

jest.mock('../../../localStorage/StorageAccess', () => ({
	userTokenIsSet: jest.fn(),
}));

describe('Header tests', () => {
	test("Header should have logo and user's name", () => {
		const expectedUser = { name: 'user-name' };
		userTokenIsSet.mockImplementation(() => true);
		render(
			<TestProvider user={expectedUser}>
				<Header />
			</TestProvider>
		);

		expect(screen.queryByAltText('epam logo')).toBeInTheDocument();
		expect(screen.queryByText(expectedUser.name)).toBeInTheDocument();
	});
});
