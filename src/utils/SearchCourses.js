function searchCourses(value, courses) {
	if (value === null) return courses;
	const valueToSearch = value.toLowerCase();
	return courses.filter((course) => course.title.toLowerCase().indexOf(valueToSearch) !== -1 || course.id.toLowerCase().indexOf(valueToSearch) !== -1);
}

export default searchCourses;
