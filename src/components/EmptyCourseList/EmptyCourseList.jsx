import React from 'react';
import Button from '../../common/Button/Button';

function EmptyCourseList() {
	return (
		<div>
			<p>Course List is Empty</p>
			<p>Please use &quot;Add New Course&quot; button to add your first course</p>
			<p>
				<Button label='Add New Course' />
			</p>
		</div>
	);
}

export default EmptyCourseList;
