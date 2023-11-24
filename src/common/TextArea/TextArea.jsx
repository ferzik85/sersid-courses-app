import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './TextArea.module.css';

function TextArea({ value, onChange, className }) {
	return <textarea value={value} className={classnames(styles.area, className)} placeholder='Input text' onChange={(e) => onChange(e.target.value)} />;
}

export default TextArea;

TextArea.defaultProps = {
	className: null,
	value: '',
};

TextArea.propTypes = {
	onChange: PropTypes.func,
	className: PropTypes.string,
	value: PropTypes.string,
};
