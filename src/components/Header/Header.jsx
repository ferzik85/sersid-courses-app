import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserName, clearLocalStorage, userTokenIsSet } from '../../localStorage/StorageAccess';
import Button from '../../common/Button/Button';
import Logo from './components/Logo';
import styles from './Header.module.css';

function Header() {
	const navigate = useNavigate();
	const name = getUserName();
	const handleLogout = () => {
		clearLocalStorage();
		navigate('/login');
	};

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.title}>COURSES</div>
			{userTokenIsSet() ? (
				<div className={styles.button}>
					<span>{name}</span>
					<Button label='LOGOUT' onClick={handleLogout} />
				</div>
			) : null}
		</div>
	);
}

export default Header;
