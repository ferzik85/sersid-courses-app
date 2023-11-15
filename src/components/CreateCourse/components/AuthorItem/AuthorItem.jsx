import React from 'react';
import classnames from 'classnames';
import styles from './AuthorItem.module.css';

function AuthorItem({ id, name }) {
	const buttonStyle = 'material-symbols-outlined';
	return (
		<div className={styles.authorItem}>
			<span>{name}</span>
			<span className={classnames(buttonStyle, styles.authorItemButton)}>add</span>
			<span className={classnames(buttonStyle, styles.authorItemButton)}>delete</span>
		</div>
	);
}

export default AuthorItem;
