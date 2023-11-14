import React from 'react';
import styles from './Button.module.css';

function Button({ label, onClick, isSubmit = false, formName = null }) {
	return (
		<button type={isSubmit ? 'submit' : 'button'} form={formName} className={styles.button} onClick={onClick}>
			{label}
		</button>
	);
}

export default Button;
