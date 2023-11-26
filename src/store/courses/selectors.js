import { createSelector } from 'reselect';
import { getAuthors } from '../authors/selectors';

export const getCourses = (state) => state.courses;

export const getCoursesWithAuthorNames = createSelector([getCourses, getAuthors], (courses, authors) =>
	courses.map((course) => ({
		...course,
		authors: course.authors.map((authorId) => authors.find((author) => author.id === authorId)?.name ?? 'Unknown author'),
	}))
);

export const getCourseWithAuthorName = createSelector(
	[getCoursesWithAuthorNames, (_, courseId) => courseId],
	(courses, courseId) => courses.find((course) => course.id === courseId) ?? null
);
