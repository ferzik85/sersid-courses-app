import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import LabeledInput from '../../common/LabeledInput/LabeledInput';
import Header from '../Header/Header';
import validateInput from '../../utils/ValidateInput';
import loginUserAsync from '../../api/LoginUser';
import { putUser, userTokenIsSet } from '../../localStorage/StorageAccess';
import styles from './Login.module.css';

function Login() {
	const navigate = useNavigate();
	const formId = 'loginForm';
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [emailIsInvalid, setEmailIsInvalid] = useState(false);
	const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

	const navigateToCourses = () => navigate('/courses', { replace: true });

	useEffect(() => {
		if (userTokenIsSet()) {
			navigateToCourses();
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
		const invalidEmail = !validateInput(email);
		const invalidPassword = !validateInput(password);
		setEmailIsInvalid(invalidEmail);
		setPasswordIsInvalid(invalidPassword);

		if (invalidEmail || invalidPassword) return;

		const userIsLoggedResponse = await loginUserAsync(email, password);
		if (userIsLoggedResponse.ok) {
			putUser(userIsLoggedResponse.name, userIsLoggedResponse.token);
			navigateToCourses();
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
