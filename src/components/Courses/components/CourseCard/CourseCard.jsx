import React from 'react';
import Button from '../../../../common/Button/Button';
import formatDate from '../../../../utils/FormatDate';
import formatDuration from '../../../../utils/FormatDuration';
import formatAuthors from '../../../../utils/FormatAuthors';

function CourseCard({ title, description, creationDate, duration, authors }) {
	return (
		<div>
			<div>
				<p>{title}</p>
				<p>{description}</p>
			</div>
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
				<p>
					<Button label='SHOW COURSE' />
				</p>
			</div>
			<div />
		</div>
	);
}

export default CourseCard;
