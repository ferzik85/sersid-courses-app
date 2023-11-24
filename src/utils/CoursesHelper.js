export function combineCoursesWithAuthorNames(courses, authors) {
	const coursesWithAuthors = courses.map((course) => ({
		...course,
		authors: course.authors.map((authorId) => authors.find((author) => author.id === authorId)?.name ?? 'Unknown author'),
	}));
	return coursesWithAuthors;
}

export function getCourseWithAuthor(id, courses, authors) {
	const foundCourseWithAuthor = combineCoursesWithAuthorNames(courses, authors).find((course) => course.id === id) ?? null;
	return foundCourseWithAuthor;
}

export function getCourse(id, courses) {
	const foundCourse = courses?.find((course) => course.id === id) ?? null;
	return foundCourse;
}
