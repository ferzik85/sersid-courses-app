import React from 'react';
import classnames from 'classnames';
import Button from '../../../../common/Button/Button';
import formatDate from '../../../../utils/FormatDate';
import formatDuration from '../../../../utils/FormatDuration';
import formatAuthors from '../../../../utils/FormatAuthors';
import styles from './CourseCard.module.css';

function CourseCard({ id, title, description, creationDate, duration, authors, onShowCourseClick }) {
	const buttonStyle = 'material-symbols-outlined';
	return (
		<div className={styles.card}>
			<div className={styles.cardLeft}>
				<p className={styles.title}>{title}</p>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.cardRight}>
				<div>
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
				</div>
				<p className={styles.cardButtons}>
					<Button label='SHOW COURSE' className={styles.cardShowButton} onClick={() => onShowCourseClick(id)} />
					<Button label='delete' className={classnames(buttonStyle, styles.cardDeleteButton)} />
					<Button label='edit' className={classnames(buttonStyle, styles.cardEditButton)} />
				</p>
			</div>
			<div />
		</div>
	);
}

export default CourseCard;
