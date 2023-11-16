import React, { useState, useCallback } from 'react';
import Courses from './components/Courses/Courses';
import mockedCoursesList from './data/CoursesList';
import mockedAuthorsList from './data/AuthorsList';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import Header from './components/Header/Header';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from './components/CreateCourse/CreateCourse';
import styles from './App.module.css';

function App() {
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
		<>
			<Header />
			<div className={styles.app}>
				{isCourseSelected() && courseExists() ? <CourseInfo course={findCourse(courseId)} onBackClick={handleShowCourses} /> : renderCourses()}
				{/* <CreateCourse /> */}
			</div>
		</>
	);
}

export default App;
