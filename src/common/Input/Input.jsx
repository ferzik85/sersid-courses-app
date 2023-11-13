import React from 'react';
import styles from './Input.module.css';

function Input({ onChange }) {
	return (
		<div className={styles.input}>
			<input type='text' placeholder='Search course ...' onChange={(e) => onChange(e.target.value)} />
		</div>
	);
}

export default Input;
