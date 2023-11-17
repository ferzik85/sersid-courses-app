import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../common/Button/Button';
import formatDate from '../../utils/FormatDate';
import formatDuration from '../../utils/FormatDuration';
import formatAuthors from '../../utils/FormatAuthors';
import { getCourse } from '../../utils/GetCourses';
import styles from './CourseInfo.module.css';

function CourseInfo() {
	const params = useParams();

	const foundCourse = getCourse(params.courseId);

	const courseIsFound = () => foundCourse != null;

	const formatDurationInHours = (duration) => {
		const formattedDuration = formatDuration(duration).split(' ');
		const formattedTime = formattedDuration[0];
		const formattedText = formattedDuration[1];
		return (
			<td>
				<b>{formattedTime}</b> {formattedText}
			</td>
		);
	};

	const courseElement = (course) => (
		<>
			<div className={styles.courseInfoTitle}>{course.title}</div>
			<div className={styles.courseDescription}>
				<div>Description:</div>
				<div className={styles.courseDescriptionLayout}>
					<div className={styles.courseDescriptionText}>{course.description}</div>
					<div className={styles.courseDescriptionMetadata}>
						<table>
							<tbody>
								<tr>
									<td>ID:</td>
									<td>{course.id}</td>
								</tr>
								<tr>
									<td>Duration:</td>
									{formatDurationInHours(course.duration)}
								</tr>
								<tr>
									<td>Created:</td>
									<td>{formatDate(course.creationDate)}</td>
								</tr>
								<tr>
									<td>Authors:</td>
									<td>{formatAuthors(course.authors)}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);

	return (
		<div className={styles.courseInfo}>
			{courseIsFound() ? courseElement(foundCourse) : <div className={styles.courseIsNotFound}>Course is not found</div>}
			<div>
				<Link to='/courses'>
					<Button label='BACK' className={styles.courseDescriptionButton} />
				</Link>
			</div>
		</div>
	);
}

export default CourseInfo;
