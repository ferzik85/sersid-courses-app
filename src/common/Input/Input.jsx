import React from 'react';
import classes from './Input.module.css';

function Input({ onChange }) {
	return (
		<div className={classes.input}>
			<input type='text' placeholder='Search course' onChange={(e) => onChange(e.target.value)} />
		</div>
	);
}

export default Input;
