import React from 'react';
import styles from './Input.module.css';

function Input({ onChange }) {
	return <input type='text' className={styles.input} placeholder='Search course ...' onChange={(e) => onChange(e.target.value)} />;
}

export default Input;
