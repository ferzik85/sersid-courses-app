/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { TestProvider } from '../../../../../test';
import CourseCard from '../CourseCard';

describe('CourseCard tests', () => {
	test('CourseCard should display title', () => {
		const expectedTitle = 'dummy-title';
		render(
			<TestProvider>
				<CourseCard title={expectedTitle} id='' description='' creationDate='' duration={0} authors={[]} />
			</TestProvider>
		);

		expect(screen.queryByText(expectedTitle)).toBeInTheDocument();
	});

	test('CourseCard should display description', () => {
		const expectedDescription = 'dummy-description';
		render(
			<TestProvider>
				<CourseCard description={expectedDescription} id='' title='' creationDate='' duration={0} authors={[]} />
			</TestProvider>
		);

		expect(screen.queryByText(expectedDescription)).toBeInTheDocument();
	});

	test('CourseCard should display creation date in the correct format', () => {
		const creationDate = '24/11/2023';
		const expectedCreationDate = '24.11.2023';
		render(
			<TestProvider>
				<CourseCard creationDate={creationDate} id='' description='' title='' duration={0} authors={[]} />
			</TestProvider>
		);

		expect(screen.queryByText(expectedCreationDate)).toBeInTheDocument();
	});

	test('CourseCard should display authors list', () => {
		const authorsList = ['author1', 'author2'];
		const expectedAuthorsList = 'author1, author2';
		render(
			<TestProvider>
				<CourseCard authors={authorsList} id='' description='' title='' creationDate='' duration={0} />
			</TestProvider>
		);

		expect(screen.queryByText(expectedAuthorsList)).toBeInTheDocument();
	});

	test('CourseCard should display duration in the correct format', () => {
		const duration = 120;
		const expectedDuration = '02:00 hours';
		render(
			<TestProvider>
				<CourseCard duration={duration} id='' description='' title='' creationDate='' authors={[]} />
			</TestProvider>
		);

		expect(screen.queryByText(expectedDuration)).toBeInTheDocument();
	});
});
