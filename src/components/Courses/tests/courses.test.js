/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import '@testing-library/jest-dom';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { courses, authors, testRender, click } from '../../../test';
import Courses from '../Courses';
import CourseForm from '../../CourseForm/CourseForm';
import { PrivateRoute } from '../../PrivateRoute';

describe('Courses tests', () => {
	test('Courses should display amount of CourseCards equal to number of courses', () => {
		const { container } = testRender(<Courses />, { authors, courses });
		expect(container.getElementsByClassName('card').length).toBe(courses.length);
	});

	test('CourseForm should be shown after a click on the "Add new course" button', () => {
		const adminUser = { role: 'admin' };
		testRender(
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
			</Routes>,
			{ user: adminUser, initialEntries: ['/courses'] }
		);
		const linkToAddNewCourse = screen.getByText('ADD NEW COURSE').parentElement;
		click(linkToAddNewCourse);

		expect(screen.getByText('Create Course').parentElement.className).toMatch(/courseForm/);
	});
});
