import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.css';

function Button({ label, onClick, type, formName, className }) {
	return (
		<button type={type} form={formName} className={classnames(styles.button, className)} onClick={onClick}>
			{label}
		</button>
	);
}

export default Button;

Button.defaultProps = {
	className: null,
	formName: null,
	type: 'button',
};

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
	formName: PropTypes.string,
	className: PropTypes.string,
};
