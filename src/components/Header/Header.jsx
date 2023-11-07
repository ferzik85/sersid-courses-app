import React from 'react';
import Button from '../../common/Button/Button';
import classes from './Header.module.css';
import Logo from './components/Logo';

function Header() {
	return (
		<div className={classes.header}>
			<div className={classes['header-title']}>
				<span className={classes['header-logo']}>
					<Logo />
				</span>
				<span>COURSES</span>
			</div>
			<div className={classes['header-button']}>
				<span>Sergey</span>
				<Button label='Logout' />
			</div>
		</div>
	);
}

export default Header;
