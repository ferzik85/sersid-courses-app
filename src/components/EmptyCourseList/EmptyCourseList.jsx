import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import styles from './EmptyCourseList.module.css';

function EmptyCourseList() {
	return (
		<>
			<div className={styles.emptyList}>Your List Is Empty</div>
			<div className={styles.emptyList}>Please use &apos;Add New Course &apos; button to add your first course</div>
			<div className={styles.emptyList}>
				<Link to='add'>
					<Button label='ADD NEW COURSE' />
				</Link>
			</div>
		</>
	);
}

export default EmptyCourseList;
