import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './ButtonInput.module.css';

export function ButtonInput({ labelName, buttonName, onClick, validateInput, inputClassName }) {
	const [value, setValue] = useState('');
	const [valueIsInvalid, setValueIsInvalid] = useState(false);
	const handleValueChange = (val) => {
		setValue(val);
		setValueIsInvalid(false);
	};

	const handleClick = (e) => {
		e.preventDefault();
		const invalidAuthorName = !validateInput(value);
		setValueIsInvalid(invalidAuthorName);
		if (valueIsInvalid) return;
		setValue('');
		onClick(value);
	};

	const assignInputClasses = () =>
		valueIsInvalid ? classnames(styles.labelInput, inputClassName, styles.errorBorder) : classnames(styles.labelInput, inputClassName);

	return (
		<label className={styles.label}>
			{labelName}
			<div>
				<Input value={value} onChange={handleValueChange} className={assignInputClasses()} />
				<Button label={buttonName} className={styles.labelButton} onClick={handleClick} />
			</div>
			{valueIsInvalid && <p className={styles.error}>{labelName} is required.</p>}
		</label>
	);
}

ButtonInput.defaultProps = {
	inputClassName: null,
};

ButtonInput.propTypes = {
	labelName: PropTypes.string,
	buttonName: PropTypes.string,
	onClick: PropTypes.func,
	validateInput: PropTypes.func,
	inputClassName: PropTypes.string,
};
