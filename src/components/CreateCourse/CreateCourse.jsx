import React, { useState } from 'react';
import classnames from 'classnames';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import TextArea from '../../common/TextArea/TextArea';
import Duration from '../../common/Duration/Duration';
import validateInput from '../../utils/ValidateInput';
import validateDuration from '../../utils/ValidateDuration';
import styles from './CreateCourse.module.css';

const formId = 'courseCreateOrEditForm';

function Login() {
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [duration, setDuration] = useState(null);

	const [titleIsInvalid, setTitleIsInvalid] = useState(false);
	const [descriptionIsInvalid, setDescriptionIsInvalid] = useState(false);
	const [durationIsInvalid, setDurationIsInvalid] = useState(false);

	const handleTitleChange = (value) => {
		setTitle(value);
		setTitleIsInvalid(false);
	};

	const handleDescriptionChange = (value) => {
		setDescription(value);
		setDescriptionIsInvalid(false);
	};

	const handleDurationChange = (value) => {
		let newDuration = 0;
		if (validateDuration(value)) {
			newDuration = +value;
		}
		setDuration(newDuration);
		setDurationIsInvalid(false);
	};

	function handleSubmit(e) {
		e.preventDefault();
		setTitleIsInvalid(!validateInput(title));
		setDescriptionIsInvalid(!validateInput(description));
		setDurationIsInvalid(!validateDuration(duration));
	}

	return (
		<div className={styles.create}>
			<h3 className={styles.header}>Course Edit/Create Page</h3>
			<div className={styles.body}>
				<form onSubmit={handleSubmit} id={formId}>
					<p>Main Info</p>
					<label>
						Title
						<Input onChange={handleTitleChange} className={titleIsInvalid ? styles.errorBorder : null} />
						{titleIsInvalid && <div className={styles.error}>Title is required.</div>}
					</label>
					<label>
						Description
						<TextArea onChange={handleDescriptionChange} className={descriptionIsInvalid ? classnames(styles.area, styles.errorBorder) : styles.area} />
						{descriptionIsInvalid && <div className={styles.error}>Description is required.</div>}
					</label>
					<p>Duration</p>
					<label>
						Duration
						<div>
							<Input onChange={handleDurationChange} className={durationIsInvalid ? classnames(styles.duration, styles.errorBorder) : styles.duration} />
							<Duration duration={duration} className={styles.durationHours} />
						</div>
						{durationIsInvalid && <div className={styles.error}>Duration is required.</div>}
					</label>
				</form>
			</div>
			<div className={styles.footer}>
				<Button label='CREATE COURSE' isSubmit formName={formId} className={styles.button} />
				<Button label='CANCEL' className={styles.button} />
			</div>
		</div>
	);
}

export default Login;
