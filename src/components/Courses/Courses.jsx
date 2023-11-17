import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import searchCourses from '../../utils/SearchCourses';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import { getCourses } from '../../utils/GetCourses';
import styles from './Courses.module.css';

function Courses() {
	const [courseList, setCourses] = useState(getCourses());

	const courseListIsEmpty = () => courseList.length === 0;

	const handleSearchClick = useCallback((searchString) => setCourses(searchCourses(searchString, courseList)), [setCourses]);

	const courseListElement = (
		<>
			<div className={styles.header}>
				<SearchBar onSearchClick={handleSearchClick} />
				<Link to='add'>
					<Button label='ADD NEW COURSE' />
				</Link>
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
				/>
			))}
		</>
	);

	const renderCourses = () => (courseListIsEmpty() ? <EmptyCourseList /> : courseListElement);

	return <div className={styles.courses}>{renderCourses()}</div>;
}

export default Courses;
