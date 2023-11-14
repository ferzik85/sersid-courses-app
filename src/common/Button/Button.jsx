import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.css';

function Button({ label, onClick, isSubmit = false, formName = null, className }) {
	return (
		<button type={isSubmit ? 'submit' : 'button'} form={formName} className={classnames(styles.button, className)} onClick={onClick}>
			{label}
		</button>
	);
}

export default Button;
