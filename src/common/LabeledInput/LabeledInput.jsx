import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import styles from './LabeledInput.module.css';

function LabeledInput({ name, onChange, inputRef, isInvalid, children, inputClassName, isTextArea }) {
	const assignInputClasses = () =>
		isInvalid ? classnames(styles.labelInput, inputClassName, styles.errorBorder) : classnames(styles.labelInput, inputClassName);

	const inputElement = <Input inputRef={inputRef} onChange={onChange} className={assignInputClasses()} />;

	const textAreaElement = <TextArea onChange={onChange} className={assignInputClasses()} />;

	return (
		<label className={styles.label}>
			{name}
			<div>
				{!isTextArea ? inputElement : textAreaElement}
				{children}
			</div>
			{isInvalid && <p className={styles.error}>{name} is required.</p>}
		</label>
	);
}

export default LabeledInput;

LabeledInput.defaultProps = {
	inputClassName: null,
	isTextArea: false,
};

LabeledInput.propTypes = {
	name: PropTypes.string,
	onChange: PropTypes.func,
	isInvalid: PropTypes.bool,
	inputClassName: PropTypes.string,
	inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	isTextArea: PropTypes.bool,
};
