import React from 'react';
import PropTypes from 'proptypes';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Button from '../../../../common/Button/Button';
import formatDate from '../../../../utils/FormatDate';
import formatDuration from '../../../../utils/FormatDuration';
import formatAuthors from '../../../../utils/FormatAuthors';
import styles from './CourseCard.module.css';

function CourseCard({ id, title, description, creationDate, duration, authors }) {
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
					<Link to={id}>
						<Button label='SHOW COURSE' className={styles.cardShowButton} />
					</Link>
					<Button label='delete' className={classnames(buttonStyle, styles.cardDeleteButton)} />
					<Button label='edit' className={classnames(buttonStyle, styles.cardEditButton)} />
				</p>
			</div>
			<div />
		</div>
	);
}

export default CourseCard;

CourseCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	creationDate: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
	authors: PropTypes.array.isRequired,
};
