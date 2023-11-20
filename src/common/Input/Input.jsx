import React from 'react';
import classnames from 'classnames';
import styles from './Input.module.css';

function Input({ onChange, inputRef, className }) {
	return (
		<input type='text' ref={inputRef} className={classnames(styles.input, className)} placeholder='Input text' onChange={(e) => onChange(e.target.value)} />
	);
}

export default Input;
