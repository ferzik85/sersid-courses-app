import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import classes from './SearchBar.module.css';

function SearchBar() {
	return (
		<div className={classes['search-bar']}>
			<Input />
			<Button label='Search' />
		</div>
	);
}

export default SearchBar;
