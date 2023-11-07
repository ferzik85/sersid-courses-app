import React from 'react';
import classes from './Input.module.css';

function Input() {
	return (
		<div className={classes.input}>
			<input type='text' placeholder='Search course' />
		</div>
	);
}

export default Input;
