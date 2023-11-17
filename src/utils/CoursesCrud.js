import { v4 as uuidv4 } from 'uuid';
import mockedCoursesList from '../data/CoursesList';
import mockedAuthorsList from '../data/AuthorsList';

export function getCourses() {
	const courses = mockedCoursesList.map((course) => ({
		...course,
		authors: course.authors.map((authorId) => mockedAuthorsList.find((author) => author.id === authorId)?.name ?? 'Unknown author'),
	}));
	return courses;
}

export function getCourse(id) {
	const foundCourse = getCourses().find((course) => course.id === id) ?? null;
	return foundCourse;
}

export function addCourse(course) {
	mockedCoursesList.push({ ...course, id: uuidv4() });
}
