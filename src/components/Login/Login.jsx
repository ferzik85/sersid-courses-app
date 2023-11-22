import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import LabeledInput from '../../common/LabeledInput/LabeledInput';
import { validateEmail, validatePassword } from '../../utils/ValidateInput';
import { putUser, userTokenIsSet } from '../../localStorage/StorageAccess';
import loginUserAsync from '../../api/LoginUser';
import { getMeAsync } from '../../api/GetMe';
import styles from './Login.module.css';

function Login() {
	const formId = 'loginForm';
	const navigate = useNavigate();
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [emailIsInvalid, setEmailIsInvalid] = useState(false);
	const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

	const navigateToCourses = (useRedirect) => navigate('/courses', { replace: useRedirect });

	useEffect(() => {
		if (userTokenIsSet()) {
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
			const me = await getMeAsync(userIsLoggedResponse.token);
			if (me.ok) {
				putUser(userIsLoggedResponse.name, userIsLoggedResponse.token, me.role);
				navigateToCourses(false);
			}
		}
	}

	return (
		<div className={styles.login}>
			<b className={styles.loginHeader}>Login</b>
			<div className={styles.loginBody}>
				<form onSubmit={handleSubmit} id={formId} className={styles.loginForm}>
					<LabeledInput name='Email' isInvalid={emailIsInvalid} onChange={handleEmailChange} inputClassName={styles.loginInput} />
					<LabeledInput name='Password' isInvalid={passwordIsInvalid} onChange={handlePasswordChange} inputClassName={styles.loginInput} />
				</form>
				<Button label='LOGIN' type='submit' formName={formId} className={styles.loginButton} />
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
