import React from 'react';
import classnames from 'classnames';
import styles from './Input.module.css';

function Input({ onChange, className }) {
	return <input type='text' className={classnames(styles.input, className)} placeholder='Input text' onChange={(e) => onChange(e.target.value)} />;
}

export default Input;
