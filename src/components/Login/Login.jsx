import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import validateInput from '../../utils/ValidateInput';
import styles from './Login.module.css';

const formId = 'loginForm';

function Login() {
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
		<div className={styles.registration}>
			<div className={styles.header}>
				<b>Login</b>
			</div>
			<div className={styles.body}>
				<form onSubmit={handleSubmit} id={formId}>
					<label>
						<b>Email</b>
						<Input onChange={handleEmailChange} className={passwordIsInvalid ? styles.errorBorder : null} />
						{emailIsInvalid && <p className={styles.error}>Email is required.</p>}
					</label>
					<label>
						<b>Password</b>
						<Input onChange={handlePasswordChange} className={passwordIsInvalid ? styles.errorBorder : null} />
						{passwordIsInvalid && <p className={styles.error}>Password is required.</p>}
					</label>
				</form>
				<div className={styles.regButton}>
					<Button label='Login' isSubmit formName={formId} />
				</div>
				<div className={styles.regHelp}>
					If you have an account you may <b>Login</b>
				</div>
			</div>
		</div>
	);
}

export default Login;
