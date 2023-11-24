import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../../common/Button/Button';
import LabeledInput from '../../common/LabeledInput/LabeledInput';
import { validateEmail, validatePassword } from '../../utils/ValidateInput';
import { putUser as addUserToLocalStorage, userTokenIsSet, getUser } from '../../localStorage/StorageAccess';
import { loginUserAction } from '../../store/user/actions';
import { getGourses } from '../../store/courses/thunk';
import { getAuthors } from '../../store/authors/thunk';
import { loginUserAsync } from '../../api/User/LoginUser';
import { getMeAsync } from '../../api/User/GetMe';
import styles from './Login.module.css';

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [emailIsInvalid, setEmailIsInvalid] = useState(false);
	const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

	const navigateToCourses = (useRedirect) => navigate('/courses', { replace: useRedirect });

	const saveUserToStore = (user) => dispatch(loginUserAction(user));

	const refreshStoreAsync = async (user) => {
		saveUserToStore(user);
		dispatch(getAuthors(user.token));
		dispatch(getGourses(user.token));
	};

	useEffect(() => {
		if (userTokenIsSet()) {
			refreshStoreAsync(getUser());
			navigateToCourses(true);
		}
	}, []);

	const handleEmailChange = (value) => {
		setEmail(value);
		setEmailIsInvalid(false);
	};

	const handlePasswordChange = (value) => {
		setPassword(value);
		setPasswordIsInvalid(false);
	};

	async function handleSubmit(e) {
		e.preventDefault();
		const invalidEmail = !validateEmail(email);
		const invalidPassword = !validatePassword(password);
		setEmailIsInvalid(invalidEmail);
		setPasswordIsInvalid(invalidPassword);
		if (invalidEmail || invalidPassword) return;
		const userIsLoggedResponse = await loginUserAsync(email, password);
		if (userIsLoggedResponse.ok) {
			const me = await getMeAsync(userIsLoggedResponse.user.token);
			if (me.ok) {
				const user = { ...userIsLoggedResponse.user, role: me.role };
				addUserToLocalStorage(user);
				await refreshStoreAsync(user);
				navigateToCourses(false);
			}
		}
	}

	return (
		<div className={styles.login}>
			<b className={styles.loginHeader}>Login</b>
			<div className={styles.loginBody}>
				<form onSubmit={handleSubmit} className={styles.loginForm}>
					<LabeledInput name='Email' isInvalid={emailIsInvalid} onChange={handleEmailChange} inputClassName={styles.loginInput} />
					<LabeledInput name='Password' isInvalid={passwordIsInvalid} onChange={handlePasswordChange} inputClassName={styles.loginInput} />
					<Button label='LOGIN' type='submit' className={styles.loginButton} />
				</form>
				<div className={styles.loginHelp}>
					If you don&apos;t have an account you may{' '}
					<Link to='/registration'>
						<b>Register</b>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Login;
