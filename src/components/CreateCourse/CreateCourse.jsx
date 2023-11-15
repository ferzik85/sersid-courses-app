import React, { useState } from 'react';
import classnames from 'classnames';
import Button from '../../common/Button/Button';
import LabeledInput from '../../common/LabeledInput/LabeledInput';
import Duration from '../../common/Duration/Duration';
import validateInput from '../../utils/ValidateInput';
import validateDuration from '../../utils/ValidateDuration';
import styles from './CreateCourse.module.css';

function CreateCourse() {
	const formId = 'courseCreateOrEditForm';
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [duration, setDuration] = useState(null);
	const [titleIsInvalid, setTitleIsInvalid] = useState(false);
	const [descriptionIsInvalid, setDescriptionIsInvalid] = useState(false);
	const [durationIsInvalid, setDurationIsInvalid] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		setTitleIsInvalid(!validateInput(title));
		setDescriptionIsInvalid(!validateInput(description));
		setDurationIsInvalid(!validateDuration(duration));
	}

	return (
		<div className={styles.create}>
			<h3 className={styles.createHeader}>Course Edit/Create Page</h3>
			<div className={styles.createBody}>
				<form onSubmit={handleSubmit} id={formId} className={styles.createForm}>
					<p className={styles.createMain}>Main Info</p>
					<LabeledInput name='Title' isInvalid={titleIsInvalid} setValue={setTitle} />
					<LabeledInput name='Description' isInvalid={descriptionIsInvalid} setValue={setDescription} inputClassName={styles.createArea} isTextArea />
					<p className={styles.createMain}>Duration</p>
					<LabeledInput name='Duration' isInvalid={durationIsInvalid} setValue={setDuration} inputClassName={styles.createDuration}>
						<Duration duration={duration} className={styles.durationHours} />
					</LabeledInput>
				</form>
			</div>
			<div className={styles.createFooter}>
				<Button label='CREATE COURSE' isSubmit formName={formId} className={styles.createButton} />
				<Button label='CANCEL' className={styles.cancelButton} />
			</div>
		</div>
	);
}

export default CreateCourse;
