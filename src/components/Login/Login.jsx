import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import LabeledInput from '../../common/LabeledInput/LabeledInput';
import validateInput from '../../utils/ValidateInput';
import styles from './Login.module.css';

function Login() {
	const formId = 'loginForm';
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [emailIsInvalid, setEmailIsInvalid] = useState(false);
	const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

	const handleEmailChange = (value) => {
		setEmail(value);
		setEmailIsInvalid(false);
	};

	const handlePasswordChange = (value) => {
		setPassword(value);
		setPasswordIsInvalid(false);
	};

	function handleSubmit(e) {
		e.preventDefault();
		setEmailIsInvalid(!validateInput(email));
		setPasswordIsInvalid(!validateInput(password));
	}

	return (
		<div className={styles.login}>
			<b className={styles.loginHeader}>Login</b>
			<div className={styles.loginBody}>
				<form onSubmit={handleSubmit} id={formId} className={styles.loginForm}>
					<LabeledInput name='Email' isInvalid={emailIsInvalid} onChange={handleEmailChange} inputClassName={styles.loginInput} />
					<LabeledInput name='Password' isInvalid={passwordIsInvalid} onChange={handlePasswordChange} inputClassName={styles.loginInput} />
				</form>
				<Button label='LOGIN' isSubmit formName={formId} className={styles.loginButton} />
				<div className={styles.loginHelp}>
					If you have an account you may <b>Login</b>
				</div>
			</div>
		</div>
	);
}

export default Login;
