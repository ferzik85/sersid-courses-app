import React from 'react';
import Button from '../../common/Button/Button';
import formatDate from '../../utils/FormatDate';
import formatDuration from '../../utils/FormatDuration';
import formatAuthors from '../../utils/FormatAuthors';
import classes from './CourseInfo.module.css';

function CourseInfo({ course, resetCourseId }) {
	const formatDurationInHours = (duration) => {
		const formattedDuration = formatDuration(duration).split(' ');
		const formattedTime = formattedDuration[0];
		const formattedText = formattedDuration[1];
		return (
			<>
				<b>{formattedTime}</b> {formattedText}
			</>
		);
	};

	return (
		<div className={classes['course-info']}>
			<div className={classes['course-info-title']}>{course.title}</div>
			<div className={classes['course-description']}>
				<div>Description:</div>
				<div className={classes['course-description-layout']}>
					<div className={classes['course-description-text']}>{course.description}</div>
					<div className={classes['course-description-metadata']}>
						<table>
							<tr>
								<td>ID:</td>
								<td>{course.id}</td>
							</tr>
							<tr>
								<td>Duration:</td>
								<td>{formatDurationInHours(course.duration)}</td>
							</tr>
							<tr>
								<td>Created:</td>
								<td>{formatDate(course.creationDate)}</td>
							</tr>
							<tr>
								<td>Authors:</td>
								<td>{formatAuthors(course.authors)}</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div>
				<Button label='BACK' onClick={resetCourseId} />
			</div>
		</div>
	);
}

export default CourseInfo;
