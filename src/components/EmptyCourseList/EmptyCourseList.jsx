import React from 'react';
import Button from '../../common/Button/Button';
import styles from './EmptyCourseList.module.css';

function EmptyCourseList() {
	return (
		<>
			<div className={styles.emptyList}>Your List Is Empty</div>
			<div className={styles.emptyList}>Please use &apos;Add New Course &apos; button to add your first course</div>
			<div className={styles.emptyList}>
				<Button label='Add New Course' />
			</div>
		</>
	);
}

export default EmptyCourseList;
