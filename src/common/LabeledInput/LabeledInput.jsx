import React from 'react';
import classnames from 'classnames';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import styles from './LabeledInput.module.css';

function LabeledInput({ name, onChange, inputRef, isInvalid, children, inputClassName = null, isTextArea = false }) {
	const assignInputClasses = () =>
		isInvalid ? classnames(styles.labelInput, inputClassName, styles.errorBorder) : classnames(styles.labelInput, inputClassName);

	const useInput = () => <Input inputRef={inputRef} onChange={onChange} className={assignInputClasses()} />;

	const useTextArea = () => <TextArea onChange={onChange} className={assignInputClasses()} />;

	return (
		<label className={styles.label}>
			{name}
			<div>
				{!isTextArea ? useInput() : useTextArea()}
				{children}
			</div>
			{isInvalid && <p className={styles.error}>{name} is required.</p>}
		</label>
	);
}

export default LabeledInput;
