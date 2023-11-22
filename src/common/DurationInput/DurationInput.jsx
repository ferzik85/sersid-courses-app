import React, { useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Duration from '../Duration/Duration';
import styles from './DurationInput.module.css';
import validateDuration from '../../utils/ValidateDuration';

export function DurationInput({ name, duration, onChange, isInvalid, inputClassName }) {
	const inputRef = useRef(null);
	const clearDurationInput = () => {
		inputRef.current.value = '';
	};

	const handleValueChange = (value) => {
		let val = value;
		if (!validateDuration(value)) {
			clearDurationInput();
			val = '';
		}
		onChange(val);
	};

	const assignInputClasses = () =>
		isInvalid ? classnames(styles.durationInput, inputClassName, styles.errorBorder) : classnames(styles.durationInput, inputClassName);

	return (
		<label className={styles.duration}>
			{name}
			<div>
				<Input inputRef={inputRef} onChange={handleValueChange} className={assignInputClasses()} />
				<Duration duration={validateDuration(duration) ? duration : 0} className={styles.durationHours} />
			</div>
			{isInvalid && <p className={styles.error}>{name} is required.</p>}
		</label>
	);
}

DurationInput.defaultProps = {
	inputClassName: null,
};

DurationInput.propTypes = {
	name: PropTypes.string,
	onChange: PropTypes.func,
	duration: PropTypes.string,
	isInvalid: PropTypes.bool,
	inputClassName: PropTypes.string,
};
