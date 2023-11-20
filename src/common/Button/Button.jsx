import React from 'react';
import PropTypes from 'proptypes';
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

Button.defaultProps = {
	className: null,
	formName: null,
	isSubmit: false,
};

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	isSubmit: PropTypes.bool,
	formName: PropTypes.string,
	className: PropTypes.string,
};
