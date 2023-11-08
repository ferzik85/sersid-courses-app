import React from 'react';
import classes from './Button.module.css';

function Button({ label, onClick }) {
	return (
		<button type='button' className={classes.button} onClick={onClick}>
			{label}
		</button>
	);
}

export default Button;
