import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import LabeledInput from '../../common/LabeledInput/LabeledInput';
import Header from '../Header/Header';
import { validateInput, validateEmail, validatePassword } from '../../utils/ValidateInput';
import registerUserAsync from '../../api/RegisterUser';

import styles from './Registration.module.css';

function Registration() {
	const formId = 'registrationForm';
	const navigate = useNavigate();
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [nameIsInvalid, setNameIsInvalid] = useState(false);
	const [emailIsInvalid, setEmailIsInvalid] = useState(false);
	const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

	const handleNameChange = (value) => {
		setName(value);
		setNameIsInvalid(false);
	};

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
		const invalidName = !validateInput(name);
		const invalidEmail = !validateEmail(email);
		const invalidPassword = !validatePassword(password);
		setNameIsInvalid(invalidName);
		setEmailIsInvalid(invalidEmail);
		setPasswordIsInvalid(invalidPassword);

		if (invalidName || invalidEmail || invalidPassword) return;

		const userIsRegistered = await registerUserAsync(name, email, password);
		if (userIsRegistered) {
			navigate('/login');
		}
	}

	return (
		<>
			<Header />
			<div className={styles.reg}>
				<b className={styles.regHeader}>Registration</b>
				<div className={styles.regBody}>
					<form onSubmit={handleSubmit} id={formId} className={styles.regForm}>
						<LabeledInput name='Name' isInvalid={nameIsInvalid} onChange={handleNameChange} inputClassName={styles.regInput} />
						<LabeledInput name='Email' isInvalid={emailIsInvalid} onChange={handleEmailChange} inputClassName={styles.regInput} />
						<LabeledInput name='Password' isInvalid={passwordIsInvalid} onChange={handlePasswordChange} inputClassName={styles.regInput} />
					</form>
					<Button label='REGISTER' type='submit' formName={formId} className={styles.regButton} />
					<div className={styles.regHelp}>
						If you have an account you may{' '}
						<Link to='/login'>
							<b>Login</b>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Registration;
