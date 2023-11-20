import React from 'react';
import PropTypes from 'proptypes';
import classnames from 'classnames';
import styles from './TextArea.module.css';

function TextArea({ onChange, className }) {
	return <textarea className={classnames(styles.area, className)} placeholder='Input text' onChange={(e) => onChange(e.target.value)} />;
}

export default TextArea;

TextArea.defaultProps = {
	className: null,
};

TextArea.propTypes = {
	onChange: PropTypes.func,
	className: PropTypes.string,
};
