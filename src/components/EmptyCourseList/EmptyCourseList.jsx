import React from 'react';
import Button from '../../common/Button/Button';
import styles from './EmptyCourseList.module.css';

function EmptyCourseList() {
	return (
		<div>
			Empty Course List
			{/* <div className={styles.emptyList}>
			 <div>Course List is Empty</div>
			<div>Please use &quot;Add New Course&quot; button to add your first course</div>
			<div>
				<Button label='Add New Course' />
			</div> */}
		</div>
	);
}

export default EmptyCourseList;
