import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import classes from './Courses.module.css';

function Courses({ courses }) {
	return (
		<div className={classes.courses}>
			{/* <SearchBar />
			<p>
				<Button label='Add New Course' />
			</p> */}
			{courses.map((course) => (
				<CourseCard
					key={course.id}
					id={course.id}
					title={course.title}
					description={course.description}
					creationDate={course.creationDate}
					duration={course.duration}
					authors={courses.authors}
				/>
			))}
		</div>
	);
}

export default Courses;
