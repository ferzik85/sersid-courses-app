import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import classes from './Courses.module.css';

function Courses({ courses, selectCourseId }) {
	return (
		<div className={classes.courses}>
			<div className={classes['courses-header']}>
				<SearchBar />
				<Button label='Add New Course' />
			</div>
			{courses.map((course) => (
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
