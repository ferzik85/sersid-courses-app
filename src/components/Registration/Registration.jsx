import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import LabeledInput from '../../common/LabeledInput/LabeledInput';
import validateInput from '../../utils/ValidateInput';
import styles from './Registration.module.css';

function Registration() {
	const formId = 'registrationForm';
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

	function handleSubmit(e) {
		e.preventDefault();
		setNameIsInvalid(!validateInput(name));
		setEmailIsInvalid(!validateInput(email));
		setPasswordIsInvalid(!validateInput(password));
	}

	return (
		<div className={styles.reg}>
			<b className={styles.regHeader}>Registration</b>
			<div className={styles.regBody}>
				<form onSubmit={handleSubmit} id={formId} className={styles.regForm}>
					<LabeledInput name='Name' isInvalid={nameIsInvalid} onChange={handleNameChange} inputClassName={styles.regInput} />
					<LabeledInput name='Email' isInvalid={emailIsInvalid} onChange={handleEmailChange} inputClassName={styles.regInput} />
					<LabeledInput name='Password' isInvalid={passwordIsInvalid} onChange={handlePasswordChange} inputClassName={styles.regInput} />
				</form>
				<Button label='REGISTER' isSubmit formName={formId} className={styles.regButton} />
				<div className={styles.regHelp}>
					If you have an account you may <b>Login</b>
				</div>
			</div>
		</div>
	);
}

export default Registration;
