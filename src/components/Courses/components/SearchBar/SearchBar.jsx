import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import styles from './SearchBar.module.css';

function SearchBar({ onSearchClick }) {
	const [value, setValue] = useState('');

	const handleChange = useCallback(
		(val) => {
			setValue(val);
			if (!val) onSearchClick(null);
		},
		[setValue]
	);
	return (
		<div className={styles.searchBar}>
			<Input value={value} onChange={handleChange} className={styles.searchInput} />
			<Button label='SEARCH' onClick={() => onSearchClick(value)} />
		</div>
	);
}

export default SearchBar;

SearchBar.propTypes = {
	onSearchClick: PropTypes.func.isRequired,
};
