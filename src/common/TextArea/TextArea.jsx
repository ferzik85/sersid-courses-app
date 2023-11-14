import React from 'react';
import classnames from 'classnames';
import styles from './TextArea.module.css';

function TextArea({ onChange, className }) {
	return <textarea className={classnames(styles.area, className)} placeholder='Input text' onChange={(e) => onChange(e.target.value)} />;
}

export default TextArea;
