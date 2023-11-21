import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../../common/Button/Button';
import LabeledInput from '../../common/LabeledInput/LabeledInput';
import Header from '../Header/Header';
import { validateEmail, validatePassword } from '../../utils/ValidateInput';
import { putUser, userTokenIsSet, getUser } from '../../localStorage/StorageAccess';
import { getAuthorsAsync, getCoursesAsync } from '../../services';
import { saveAuthorsAction } from '../../store/authors/actions';
import { saveCoursesAction } from '../../store/courses/actions';
import { loginUserAction } from '../../store/user/actions';
import loginUserAsync from '../../api/LoginUser';
import styles from './Login.module.css';

function Login() {
	const formId = 'loginForm';
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [emailIsInvalid, setEmailIsInvalid] = useState(false);
	const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

	const navigateToCourses = () => navigate('/courses', { replace: true });

	const saveUserToStore = (user) => {
		dispatch(loginUserAction(user));
	};

	const saveCoursesToStoreAsync = async (token) => {
		const courses = await getCoursesAsync(token);
		dispatch(saveCoursesAction(courses));
	};

	const saveAuthorsToStoreAsync = async (token) => {
		const authors = await getAuthorsAsync(token);
		dispatch(saveAuthorsAction(authors));
	};

	const refreshStoreAsync = async (user) => {
		saveUserToStore(user);
		await saveAuthorsToStoreAsync(user.token);
		await saveCoursesToStoreAsync(user.token);
		navigateToCourses();
	};

	useEffect(() => {
		if (userTokenIsSet()) {
			refreshStoreAsync(getUser());
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
			putUser(userIsLoggedResponse.user);
			await refreshStoreAsync(userIsLoggedResponse.user);
		}
	}

	return (
		<>
			<Header />
			<div className={styles.login}>
				<b className={styles.loginHeader}>Login</b>
				<div className={styles.loginBody}>
					<form onSubmit={handleSubmit} id={formId} className={styles.loginForm}>
						<LabeledInput name='Email' isInvalid={emailIsInvalid} onChange={handleEmailChange} inputClassName={styles.loginInput} />
						<LabeledInput name='Password' isInvalid={passwordIsInvalid} onChange={handlePasswordChange} inputClassName={styles.loginInput} />
					</form>
					<Button label='LOGIN' isSubmit formName={formId} className={styles.loginButton} />
					<div className={styles.loginHelp}>
						If you don&apos;t have an account you may{' '}
						<Link to='/register'>
							<b>Register</b>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
