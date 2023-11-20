import React from 'react';
import { Link } from 'react-router-dom';
import { getUserName } from '../../localStorage/StorageAccess';
import Button from '../../common/Button/Button';
import styles from './EmptyCourseList.module.css';

function EmptyCourseList() {
	const userName = getUserName();

	const isAdminUser = () => userName === 'ADMIN';

	const addNewCourse = () => (
		<Link to='add'>
			<Button label='ADD NEW COURSE' />
		</Link>
	);

	const showErrorMessageToNonAdmins = () => <>You don&apos;t have permissions to create a course. Please log in as ADMIN.</>;

	return (
		<>
			<div className={styles.emptyListRow}>Your List Is Empty</div>
			<div className={styles.emptyListRow}>Please use &apos;Add New Course&apos; button to add your first course</div>
			<div className={styles.emptyListRow}>{isAdminUser() ? addNewCourse() : showErrorMessageToNonAdmins()}</div>
		</>
	);
}

export default EmptyCourseList;
