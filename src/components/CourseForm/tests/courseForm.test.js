/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { TestProvider, authors, click } from '../../../test';
import CourseForm from '../CourseForm';

const getAuthorItems = (authorsPanel) => screen.getByText(authorsPanel).parentElement.getElementsByClassName('authorItem');
const getCourseAuthorItem = (authorPosition) => screen.getByText('Course Authors').parentElement.getElementsByClassName('authorItemName')[authorPosition];
const getAuthorItemName = (authorPosition) => getCourseAuthorItem(authorPosition).textContent;
const addAuthorButton = (authorName) => screen.getByText(authorName).nextSibling;
const deleteCourseAuthorButton = (authorPosition) => getCourseAuthorItem(authorPosition).nextSibling;

// NOTE: it is not recommended to mock React-Redux hooks (useDispatch),
// but it is required to check that dispatch is called by the task
const mockDispatchFn = jest.fn();
jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: () => mockDispatchFn,
}));

beforeEach(() => {
	render(
		<TestProvider authors={authors}>
			<CourseForm />
		</TestProvider>
	);
});

afterEach(cleanup);

describe('CourseForm tests', () => {
	test('CourseForm should show authors lists (all and course authors)', () => {
		const addNicolas = addAuthorButton('Nicolas Kim');
		const addAnna = addAuthorButton('Anna Sidorenko');
		click(addNicolas);
		click(addAnna);

		expect(getAuthorItems('Authors').length).toBe(authors.length);
		expect(getAuthorItems('Course Authors').length).toBe(2);
	});

	test('CourseForm "Create author" button click should call dispatch', () => {
		const createAuthorButton = screen.getByText('CREATE AUTHOR');
		click(createAuthorButton);

		const addAuthorThunkFunction = mockDispatchFn.mock.calls[0][0].name;
		expect(addAuthorThunkFunction).toBe('addAuthorToDbAndStore');
	});

	test('CourseForm "Add author" button click should add an author to the course authors list', () => {
		const addAnna = addAuthorButton('Anna Sidorenko');
		click(addAnna);

		expect(getAuthorItemName(0)).toBe('Anna Sidorenko');
	});

	test('CourseForm "Delete author" button click should delete an author from the course list', () => {
		const addNicolas = addAuthorButton('Nicolas Kim');
		const addAnna = addAuthorButton('Anna Sidorenko');
		click(addNicolas);
		click(addAnna);
		const deleteAnna = deleteCourseAuthorButton(1);
		click(deleteAnna);

		expect(getAuthorItemName(0)).toBe('Nicolas Kim');
		expect(getAuthorItems('Course Authors').length).toBe(1);
	});
});
