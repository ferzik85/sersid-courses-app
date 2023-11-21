import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'proptypes';
import { useNavigate } from 'react-router-dom';
import { logoutUserAction } from '../../store/user/actions';
import { getUserName, clearLocalStorage } from '../../localStorage/StorageAccess';
import Button from '../../common/Button/Button';
import Logo from './components/Logo';
import styles from './Header.module.css';

function Header({ showUserInfo }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.name);
	const handleLogout = () => {
		clearLocalStorage();
		dispatch(logoutUserAction());
		navigate('/login', { replace: true });
	};

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.title}>COURSES</div>
			{showUserInfo ? (
				<div className={styles.button}>
					<span>{user}</span>
					<Button label='LOGOUT' onClick={handleLogout} />
				</div>
			) : null}
		</div>
	);
}

export default Header;

Header.propTypes = {
	showUserInfo: PropTypes.bool,
};
