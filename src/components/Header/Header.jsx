import React from 'react';
import Button from '../../common/Button/Button';
import classes from './Header.module.css';

function Header() {
	return (
		<div className={classes.header}>
			<p className={classes.title}>Courses</p>
			<span>Sergey</span>
			<span className={classes.headerbutton}>
				<Button label='Logout' />
			</span>
		</div>
	);
}

export default Header;
