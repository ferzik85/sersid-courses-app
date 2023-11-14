import React from 'react';
import formatDuration from '../../utils/FormatDuration';

function Duration({ duration, className }) {
	const formattedDuration = formatDuration(duration).split(' ');
	const formattedTime = formattedDuration[0];
	const formattedText = formattedDuration[1];
	return (
		<span className={className}>
			<b>{formattedTime}</b> {formattedText}
		</span>
	);
}

export default Duration;
