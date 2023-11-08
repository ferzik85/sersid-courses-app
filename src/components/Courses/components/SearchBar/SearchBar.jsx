import React, { useState, useCallback } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import classes from './SearchBar.module.css';

function SearchBar({ submitSearchString }) {
	const [searchValue, setSearchValue] = useState(null);

	const handleSearchValueChange = useCallback(
		(value) => {
			setSearchValue(value);
			if (!value) submitSearchString(null);
		},
		[setSearchValue]
	);

	return (
		<div className={classes['search-bar']}>
			<Input onChange={handleSearchValueChange} />
			<Button label='Search' onClick={() => submitSearchString(searchValue)} />
		</div>
	);
}

export default SearchBar;
