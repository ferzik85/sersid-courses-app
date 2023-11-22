import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearLocalStorage, userTokenIsSet } from '../../localStorage/StorageAccess';
import { logoutUserAction } from '../../store/user/actions';
import Button from '../../common/Button/Button';
import Logo from './components/Logo';
import styles from './Header.module.css';

function Header() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogout = () => {
		clearLocalStorage();
		dispatch(logoutUserAction());
		navigate('/login');
	};
	const user = useSelector((state) => state.user.name);

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.title}>COURSES</div>
			{userTokenIsSet() ? (
				<div className={styles.button}>
					<span>{user}</span>
					<Button label='LOGOUT' onClick={handleLogout} />
				</div>
			) : null}
		</div>
	);
}

export default Header;
