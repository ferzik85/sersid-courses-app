import React from 'react';
import Button from '../../common/Button/Button';
import formatDate from '../../utils/FormatDate';
import formatDuration from '../../utils/FormatDuration';
import formatAuthors from '../../utils/FormatAuthors';

function CourseInfo({ course }) {
	return (
		<div>
			<p>{course.title}</p>
			<div>
				<p>Description</p>
				<p>{course.description}</p>
			</div>
			<div>
				<p>
					<span>ID: </span>
					{course.id}
				</p>
				<p>
					<span>Duration: </span>
					{formatDuration(course.duration)}
				</p>
				<p>
					<span>Created: </span>
					{formatDate(course.creationDate)}
				</p>
				<p>
					<span>Authors: </span>
					{formatAuthors(course.authors)}
				</p>
				<p>
					<Button label='BACK' />
				</p>
			</div>
			<div />
		</div>
	);
}

export default CourseInfo;
