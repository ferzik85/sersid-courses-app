import React from 'react';
import Button from '../../../../common/Button/Button';
import formatDate from '../../../../utils/FormatDate';
import formatDuration from '../../../../utils/FormatDuration';
import formatAuthors from '../../../../utils/FormatAuthors';
import classes from './CourseCard.module.css';

function CourseCard({ id, title, description, creationDate, duration, authors, selectCourseId }) {
	return (
		<div className={classes['course-card']}>
			<div className={classes['course-card-left']}>
				<p className={classes['course-card-title']}>{title}</p>
				<p className={classes['course-card-description']}>{description}</p>
			</div>
			<div className={classes['course-card-right']}>
				<p>
					<span>Authors: </span>
					{formatAuthors(authors)}
				</p>
				<p>
					<span>Duration: </span>
					{formatDuration(duration)}
				</p>
				<p>
					<span>Created: </span>
					{formatDate(creationDate)}
				</p>
				<p className={classes['course-card-right-p-button']}>
					<Button label='SHOW COURSE' onClick={() => selectCourseId(id)} />
				</p>
			</div>
			<div />
		</div>
	);
}

export default CourseCard;
