import React from 'react';
import PropTypes from 'proptypes';
import classnames from 'classnames';
import styles from './Duration.module.css';
import formatDuration from '../../utils/FormatDuration';

function Duration({ duration, className }) {
	const formattedDuration = formatDuration(duration).split(' ');
	const formattedTime = formattedDuration[0];
	const formattedText = formattedDuration[1];
	return (
		<span className={classnames(styles.duration, className)}>
			<b>{formattedTime}</b> {formattedText}
		</span>
	);
}

export default Duration;

Duration.defaultProps = {
	className: null,
};

Duration.propTypes = {
	duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	className: PropTypes.string,
};
