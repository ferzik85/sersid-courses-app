import React, { useState, useCallback } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import searchCourses from '../../utils/SearchCourses';
import classes from './Courses.module.css';

function Courses({ courses, selectCourseId }) {
	const [courseList, setCourses] = useState(courses);

	const submitSearchString = useCallback(
		(searchString) => {
			setCourses(searchCourses(searchString, courseList));
		},
		[setCourses]
	);

	return (
		<div className={classes.courses}>
			<div className={classes['courses-header']}>
				<SearchBar submitSearchString={submitSearchString} />
				<Button label='Add New Course' />
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
					selectCourseId={selectCourseId}
				/>
			))}
		</div>
	);
}

export default Courses;
