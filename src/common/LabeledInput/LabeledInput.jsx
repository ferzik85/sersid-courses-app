import React, { useState } from 'react';
import classnames from 'classnames';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import styles from './LabeledInput.module.css';

function LabeledInput({ name, setValue, isInvalid, children, inputClassName = null, isTextArea = false }) {
	const [_, setValueIsInvalid] = useState(isInvalid);

	const handleValueChange = (value) => {
		setValue(value);
		setValueIsInvalid(false);
	};

	const assignInputClass = () =>
		isInvalid ? classnames(styles.labelInput, inputClassName, styles.errorBorder) : classnames(styles.labelInput, inputClassName);

	return (
		<label className={styles.label}>
			{name}
			{!isTextArea ? (
				<Input onChange={handleValueChange} className={assignInputClass()} />
			) : (
				<TextArea onChange={handleValueChange} className={assignInputClass()} />
			)}
			{children}
			{isInvalid && <p className={styles.error}>{name} is required.</p>}
		</label>
	);
}

export default LabeledInput;
