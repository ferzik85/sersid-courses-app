import React, { useState, useCallback } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import searchCourses from '../../utils/SearchCourses';
import styles from './Courses.module.css';

function Courses({ courses, onShowCourseClick }) {
	const [courseList, setCourses] = useState(courses);

	const handleSearchClick = useCallback((searchString) => setCourses(searchCourses(searchString, courseList)), [setCourses]);

	return (
		<div className={styles.courses}>
			<div className={styles.header}>
				<SearchBar onSearchClick={handleSearchClick} />
				<Button label='ADD NEW COURSE' />
			</div>
			{courseList.map((course) => (
				<CourseCard
					key={course.id}
					id={course.id}
					title={course.title}
					description={course.description}
					creationDate={course.creationDate}
					duration={course.duration}
					authors={course.authors}
					onShowCourseClick={onShowCourseClick}
				/>
			))}
		</div>
	);
}

export default Courses;
