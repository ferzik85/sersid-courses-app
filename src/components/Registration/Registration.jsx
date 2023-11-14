import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import validateInput from '../../utils/ValidateInput';
import styles from './Registration.module.css';

const formId = 'registrationForm';

function Registration() {
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
		<div className={styles.registration}>
			<div className={styles.header}>
				<b>Registration</b>
			</div>
			<div className={styles.body}>
				<form onSubmit={handleSubmit} id={formId}>
					<label>
						<b>Name</b>
						<Input onChange={handleNameChange} className={nameIsInvalid ? styles.errorBorder : null} />
						{nameIsInvalid && <p className={styles.error}>Name is required.</p>}
					</label>
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
					<Button label='Register' isSubmit formName={formId} />
				</div>
				<div className={styles.regHelp}>
					If you have an account you may <b>Login</b>
				</div>
			</div>
		</div>
	);
}

export default Registration;
