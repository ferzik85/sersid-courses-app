import { getCoursesApiAsync } from './api/Courses/GetCourses';
import { getAuthorsApiAsync } from './api/Authors/GetAuthors';

export async function getAuthorsAsync(token) {
	const response = await getAuthorsApiAsync(token);
	return response.authors;
}

export async function getCoursesAsync(token) {
	const response = await getCoursesApiAsync(token);
	return response.courses;
}
