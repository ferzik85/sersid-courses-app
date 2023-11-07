import React from 'react';
import classes from './Button.module.css';

function Button({ label }) {
	return (
		<button type='button' className={classes.button}>
			{label}
		</button>
	);
}

export default Button;
