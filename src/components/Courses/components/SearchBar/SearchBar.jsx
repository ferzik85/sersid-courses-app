import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

function SearchBar() {
	return (
		<div>
			<p>
				<Input />
				<Button label='Search' />
			</p>
		</div>
	);
}

export default SearchBar;
