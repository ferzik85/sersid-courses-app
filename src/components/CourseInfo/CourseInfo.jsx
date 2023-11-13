import React from 'react';
import Button from '../../common/Button/Button';
import formatDate from '../../utils/FormatDate';
import formatDuration from '../../utils/FormatDuration';
import formatAuthors from '../../utils/FormatAuthors';
import styles from './CourseInfo.module.css';

function CourseInfo({ course, onBackClick }) {
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
		<div className={styles['course-info']}>
			<div className={styles['course-info-title']}>{course.title}</div>
			<div className={styles['course-description']}>
				<div>Description:</div>
				<div className={styles['course-description-layout']}>
					<div className={styles['course-description-text']}>{course.description}</div>
					<div className={styles['course-description-metadata']}>
						<table>
							<tbody>
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
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div>
				<Button label='BACK' onClick={onBackClick} />
			</div>
		</div>
	);
}

export default CourseInfo;
