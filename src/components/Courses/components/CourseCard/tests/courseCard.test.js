/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { TestProvider } from '../../../../../test';
import CourseCard from '../CourseCard';

const title = 'dummy-title';
const description = 'dummy-description';
const creationDate = '24/11/2023';
const authorsList = ['author1', 'author2'];
const duration = 120;

beforeEach(() => {
	render(
		<TestProvider>
			<CourseCard title={title} description={description} creationDate={creationDate} duration={duration} authors={authorsList} id='' />
		</TestProvider>
	);
});

describe('CourseCard tests', () => {
	test('CourseCard should display title', () => {
		expect(screen.queryByText(title)).toBeInTheDocument();
	});

	test('CourseCard should display description', () => {
		expect(screen.queryByText(description)).toBeInTheDocument();
	});

	test('CourseCard should display creation date in the correct format', () => {
		const expectedCreationDate = '24.11.2023';
		expect(screen.queryByText(expectedCreationDate)).toBeInTheDocument();
	});

	test('CourseCard should display authors list', () => {
		const expectedAuthorsList = 'author1, author2';
		expect(screen.queryByText(expectedAuthorsList)).toBeInTheDocument();
	});

	test('CourseCard should display duration in the correct format', () => {
		const expectedDuration = '02:00 hours';
		expect(screen.queryByText(expectedDuration)).toBeInTheDocument();
	});
});
