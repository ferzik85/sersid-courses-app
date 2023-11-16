import React, { useState, useCallback } from 'react';
import Courses from '../Courses/Courses';
import mockedCoursesList from '../../data/CoursesList';
import mockedAuthorsList from '../../data/AuthorsList';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseInfo from '../CourseInfo/CourseInfo';
import Registration from '../Registration/Registration';
import CreateCourse from '../CreateCourse/CreateCourse';
import Login from '../Login/Login';
import styles from './Body.module.css';

function Body() {
	const courses = mockedCoursesList.map((course) => ({
		...course,
		authors: course.authors.map((authorId) => mockedAuthorsList.find((author) => author.id === authorId)?.name ?? 'Unknown author'),
	}));

	const [courseId, setCourseId] = useState(null);

	const handleShowCourse = useCallback((id) => setCourseId(id), [setCourseId]);

	const handleShowCourses = useCallback(() => setCourseId(null), [setCourseId]);

	const isCourseSelected = () => courseId !== null;

	const courseExists = () => courses.some((course) => course.id === courseId);

	const findCourse = () => courses.find((course) => course.id === courseId);

	const courseListIsEmpty = () => courses.length === 0;

	const renderCourses = () => (courseListIsEmpty() ? <EmptyCourseList /> : <Courses courses={courses} onShowCourseClick={handleShowCourse} />);

	return (
		<div className={styles.body}>
			{isCourseSelected() && courseExists() ? <CourseInfo course={findCourse(courseId)} onBackClick={handleShowCourses} /> : renderCourses()}
			{/* <CreateCourse /> <Login /><Registration /> */}
		</div>
	);
}

export default Body;
