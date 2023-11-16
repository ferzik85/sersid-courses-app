import React from 'react';
import classnames from 'classnames';
import styles from './AuthorItem.module.css';

function AuthorItem({ id, name, authorItemClass, authorItemNameClass, addIsDisabled = false }) {
	const buttonStyle = 'material-symbols-outlined';
	return (
		<div className={classnames(styles.authorItem, authorItemClass)}>
			<span className={classnames(styles.authorItemName, authorItemNameClass)}>{name}</span>
			{!addIsDisabled ? <span className={classnames(buttonStyle, styles.authorItemButton)}>add</span> : null}
			<span className={classnames(buttonStyle, styles.authorItemButton)}>delete</span>
		</div>
	);
}

export default AuthorItem;
