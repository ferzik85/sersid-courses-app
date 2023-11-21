export function combineCoursesWithAuthors(courses, authors) {
	const coursesWithAuthors = courses.map((course) => ({
		...course,
		authors: course.authors.map((authorId) => authors.find((author) => author.id === authorId)?.name ?? 'Unknown author'),
	}));
	return coursesWithAuthors;
}

export function getCourse(id, courses, authors) {
	const foundCourse = combineCoursesWithAuthors(courses, authors).find((course) => course.id === id) ?? null;
	return foundCourse;
}
