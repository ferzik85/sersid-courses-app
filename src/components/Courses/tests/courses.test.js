/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import '@testing-library/jest-dom';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { courses, authors, TestProvider, click } from '../../../test';
import { isAdminUser } from '../../../localStorage/StorageAccess';
import Courses from '../Courses';
import CourseForm from '../../CourseForm/CourseForm';
import { PrivateRoute } from '../../PrivateRoute';

jest.mock('../../../localStorage/StorageAccess', () => ({
	isAdminUser: jest.fn(),
}));

describe('Courses tests', () => {
	test('Courses should display amount of CourseCards equal to number of courses', () => {
		const { container } = render(
			<TestProvider authors={authors} courses={courses}>
				<Courses />
			</TestProvider>
		);

		expect(container.getElementsByClassName('card').length).toBe(courses.length);
	});

	test('CourseForm should be shown after a click on the "Add new course" button', () => {
		isAdminUser.mockImplementation(() => true);
		render(
			<TestProvider initialEntries={['/courses']}>
				<Routes>
					<Route path='/courses' element={<Courses />} />
					<Route
						path='/courses/add'
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
				</Routes>
			</TestProvider>
		);
		const linkToAddNewCourse = screen.getByText('ADD NEW COURSE').parentElement;
		click(linkToAddNewCourse);

		expect(screen.getByText('Create Course').parentElement.className).toMatch(/courseForm/);
	});
});
