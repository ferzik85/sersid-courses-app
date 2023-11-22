import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import styles from './LabeledInput.module.css';

function LabeledInput({ name, onChange, isInvalid, inputClassName, isTextArea }) {
	const defaultClassNames = classnames(styles.labelInput, inputClassName);
	const errorClassNames = classnames(styles.labelInput, inputClassName, styles.errorBorder);
	const assignInputClasses = isInvalid ? errorClassNames : defaultClassNames;
	const inputElement = <Input onChange={onChange} className={assignInputClasses} />;
	const textAreaElement = <TextArea onChange={onChange} className={assignInputClasses} />;

	return (
		<label className={styles.label}>
			{name}
			<div>{!isTextArea ? inputElement : textAreaElement}</div>
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
	isTextArea: PropTypes.bool,
};
