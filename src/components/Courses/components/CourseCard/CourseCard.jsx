import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { deleteCourseAction } from '../../../../store/courses/actions';
import Button from '../../../../common/Button/Button';
import formatDate from '../../../../utils/FormatDate';
import formatDuration from '../../../../utils/FormatDuration';
import formatAuthors from '../../../../utils/FormatAuthors';
import styles from './CourseCard.module.css';

function CourseCard({ id, title, description, creationDate, duration, authors }) {
	const buttonStyle = 'material-symbols-outlined';
	const dispatch = useDispatch();
	const handleDeleteCourse = () => dispatch(deleteCourseAction(id));

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
					<Button label='delete' onClick={handleDeleteCourse} className={classnames(buttonStyle, styles.cardDeleteButton)} />
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
	authors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
