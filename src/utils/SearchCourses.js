function searchCourses(value, courses) {
	if (value === null) return courses;
	const valueToSearch = value.toLowerCase();
	return courses.filter((course) => course.title.toLowerCase().includes(valueToSearch) || course.id.toLowerCase().includes(valueToSearch));
}

export default searchCourses;
