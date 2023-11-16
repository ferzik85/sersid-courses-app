import React from 'react';
import Button from '../../common/Button/Button';
import styles from './Header.module.css';
import Logo from './components/Logo';

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.title}>COURSES</div>
			<div className={styles.button}>
				<span>Sergey</span>
				<Button label='Logout' />
			</div>
		</div>
	);
}

export default Header;
