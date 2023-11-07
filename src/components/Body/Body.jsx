import React from 'react';
import Courses from '../Courses/Courses';
import mockedCoursesList from '../../data/CoursesList';
import mockedAuthorsList from '../../data/AuthorsList';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseInfo from '../CourseInfo/CourseInfo';
import bodyClasses from './Body.module.css';

function Body() {
	const courses = mockedCoursesList.map((course) => ({
		...course,
		authors: course.authors.map((authorId) => mockedAuthorsList.find((author) => author.id === authorId)?.name ?? 'Unknown author'),
	}));

	return (
		<div className={bodyClasses.body}>
			<Courses courses={courses} />
			{/* <EmptyCourseList />
			<CourseInfo course={courses[0]} /> */}
		</div>
	);
}

export default Body;
