import React from 'react';
import PropTypes from 'proptypes';
import classnames from 'classnames';
import Button from '../../../../common/Button/Button';
import styles from './AuthorItem.module.css';

function AuthorItem({ id, name, authorItemClass, onAddClick, onDeleteClick, addIsDisabled = false }) {
	const buttonStyle = 'material-symbols-outlined';
	return (
		<div className={classnames(styles.authorItem, authorItemClass)}>
			<span className={styles.authorItemName}>{name}</span>
			{!addIsDisabled ? <Button label='add' onClick={(e) => onAddClick(e, id)} className={classnames(buttonStyle, styles.authorItemButton)} /> : null}
			<Button label='delete' onClick={(e) => onDeleteClick(e, id)} className={classnames(buttonStyle, styles.authorItemButton)} />
		</div>
	);
}

export default AuthorItem;

AuthorItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	authorItemClass: PropTypes.string,
	onAddClick: PropTypes.func,
	onDeleteClick: PropTypes.func,
	addIsDisabled: PropTypes.bool,
};
