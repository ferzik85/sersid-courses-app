import React from 'react';
import classnames from 'classnames';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import styles from './LabeledInput.module.css';

function LabeledInput({ name, onChange, isInvalid, children, inputClassName = null, isTextArea = false }) {
	const assignInputClass = () =>
		isInvalid ? classnames(styles.labelInput, inputClassName, styles.errorBorder) : classnames(styles.labelInput, inputClassName);

	return (
		<label className={styles.label}>
			{name}
			<div>
				{!isTextArea ? <Input onChange={onChange} className={assignInputClass()} /> : <TextArea onChange={onChange} className={assignInputClass()} />}
				{children}
			</div>
			{isInvalid && <p className={styles.error}>{name} is required.</p>}
		</label>
	);
}

export default LabeledInput;
