import React from 'react';
import Button from '../../../../common/Button/Button';
import formatDate from '../../../../utils/FormatDate';
import formatDuration from '../../../../utils/FormatDuration';
import formatAuthors from '../../../../utils/FormatAuthors';
import styles from './CourseCard.module.css';

function CourseCard({ id, title, description, creationDate, duration, authors, onShowCourseClick }) {
	return (
		<div className={styles.card}>
			<div className={styles.left}>
				<p className={styles.title}>{title}</p>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.right}>
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
				<p className={styles['card-button']}>
					<Button label='SHOW COURSE' onClick={() => onShowCourseClick(id)} />
				</p>
			</div>
			<div />
		</div>
	);
}

export default CourseCard;
