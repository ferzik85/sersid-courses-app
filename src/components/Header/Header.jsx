import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import styles from './Header.module.css';
import { getUserName, clearLocalStorage } from '../../localStorage/StorageAccess';
import Logo from './components/Logo';

function Header({ showUserInfo }) {
	const navigate = useNavigate();
	const [name, setName] = useState(null);
	useEffect(() => {
		setName(getUserName());
	}, []);

	function handleLogout() {
		clearLocalStorage();
		navigate('/login', { replace: true });
	}

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.title}>COURSES</div>
			{showUserInfo ? (
				<div className={styles.button}>
					<span>{name}</span>
					<Button label='LOGOUT' onClick={() => handleLogout()} />
				</div>
			) : null}
		</div>
	);
}

export default Header;
