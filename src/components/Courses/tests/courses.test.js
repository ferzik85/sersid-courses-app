/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { courses, authors, TestProvider, click } from '../../../test';
import { isAdminUser } from '../../../localStorage/StorageAccess';
import Courses from '../Courses';

jest.mock('../../../localStorage/StorageAccess', () => ({
	isAdminUser: jest.fn(),
}));

describe('Courses tests', () => {
	test('Courses should display amount of CourseCard equal to number of courses', () => {
		const expectedUser = { name: 'user-name' };
		const { container } = render(
			<TestProvider user={expectedUser} authors={authors} courses={courses}>
				<Courses />
			</TestProvider>
		);
		expect(container.getElementsByClassName('card').length).toBe(courses.length);
	});

	test('CourseForm should be shown after a click on the "Add new course" button', () => {
		isAdminUser.mockImplementation(() => true);
		const expectedUser = { name: 'user-name' };
		render(
			<TestProvider user={expectedUser} authors={authors} courses={courses}>
				<Courses />
			</TestProvider>
		);

		click(screen.getByText('ADD NEW COURSE'));
	});
});
