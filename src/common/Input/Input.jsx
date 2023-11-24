import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Input.module.css';

function Input({ value, onChange, className }) {
	return (
		<input type='text' value={value} className={classnames(styles.input, className)} placeholder='Input text' onChange={(e) => onChange(e.target.value)} />
	);
}

export default Input;

Input.defaultProps = {
	className: null,
	value: '',
};

Input.propTypes = {
	onChange: PropTypes.func,
	className: PropTypes.string,
	value: PropTypes.string,
};
