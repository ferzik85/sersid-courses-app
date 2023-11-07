import React from 'react';
import Button from '../../common/Button/Button';
import formatDate from '../../utils/FormatDate';
import formatDuration from '../../utils/FormatDuration';
import formatAuthors from '../../utils/FormatAuthors';
import classes from './CourseInfo.module.css';

function CourseInfo({ course }) {
	return (
		<div className={classes['course-info']}>
			<div className={classes['course-info-title']}>{course.title}</div>
			<div className={classes['course-description']}>
				<div>Description:</div>
				<div className={classes['course-description-layout']}>
					<div className={classes['course-description-text']}>{course.description}</div>
					<div>
						<p>
							<span>ID: </span>
							{course.id}
						</p>
						<p>
							<span>Duration: </span>
							{formatDuration(course.duration)}
						</p>
						<p>
							<span>Created: </span>
							{formatDate(course.creationDate)}
						</p>
						<p>
							<span>Authors: </span>
							{formatAuthors(course.authors)}
						</p>
					</div>
				</div>
			</div>
			<div>
				<Button label='BACK' />
			</div>
		</div>
	);
}

export default CourseInfo;
