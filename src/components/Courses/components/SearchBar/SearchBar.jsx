import React, { useState, useCallback } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import styles from './SearchBar.module.css';

function SearchBar({ onSearchClick }) {
	const [searchValue, setSearchValue] = useState(null);

	const handleChange = useCallback(
		(value) => {
			setSearchValue(value);
			if (!value) onSearchClick(null);
		},
		[setSearchValue]
	);

	return (
		<div className={styles['search-bar']}>
			<div className={styles.input}>
				<Input onChange={handleChange} />
			</div>
			<Button label='Search' onClick={() => onSearchClick(searchValue)} />
		</div>
	);
}

export default SearchBar;
