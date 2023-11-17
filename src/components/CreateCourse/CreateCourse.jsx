import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import LabeledInput from '../../common/LabeledInput/LabeledInput';
import Duration from '../../common/Duration/Duration';
import validateInput from '../../utils/ValidateInput';
import validateDuration from '../../utils/ValidateDuration';
import AuthorItem from './components/AuthorItem/AuthorItem';
import styles from './CreateCourse.module.css';

function CreateCourse() {
	const formId = 'courseCreateOrEditForm';
	const navigate = useNavigate();
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [duration, setDuration] = useState(null);
	const [titleIsInvalid, setTitleIsInvalid] = useState(false);
	const [descriptionIsInvalid, setDescriptionIsInvalid] = useState(false);
	const [durationIsInvalid, setDurationIsInvalid] = useState(false);

	const fakeAuthors = [
		{
			id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			name: 'Vasiliy Dobkin',
		},
		{
			id: 'f762978b-61eb-4096-812b-ebde22838167',
			name: 'Nicolas Kim',
		},
	];

	const handleTitleChange = (value) => {
		setTitle(value);
		setTitleIsInvalid(false);
	};

	const handleDescriptionChange = (value) => {
		setDescription(value);
		setDescriptionIsInvalid(false);
	};

	const handleDurationChange = (value) => {
		setDuration(value);
		setDurationIsInvalid(false);
	};

	function handleSubmit(e) {
		e.preventDefault();
		setTitleIsInvalid(!validateInput(title));
		setDescriptionIsInvalid(!validateInput(description));
		setDurationIsInvalid(!validateDuration(duration));
		navigate('/courses', { replace: true });
	}

	return (
		<div className={styles.create}>
			<h3 className={styles.createHeader}>Course Edit/Create Page</h3>
			<div className={styles.createBody}>
				<form onSubmit={handleSubmit} id={formId} className={styles.createForm}>
					<p className={styles.createMain}>Main Info</p>
					<LabeledInput name='Title' isInvalid={titleIsInvalid} onChange={handleTitleChange} inputClassName={styles.createTitle} />
					<LabeledInput
						name='Description'
						isInvalid={descriptionIsInvalid}
						onChange={handleDescriptionChange}
						inputClassName={styles.createDescription}
						isTextArea
					/>
					<p className={styles.createMain}>Duration</p>
					<LabeledInput name='Duration' isInvalid={durationIsInvalid} onChange={handleDurationChange} inputClassName={styles.createDuration}>
						<Duration duration={validateDuration(duration) ? duration : 0} className={styles.durationHours} />
					</LabeledInput>
					<div className={styles.createAuthorsPanel}>
						<div className={styles.addAuthorsPanel}>
							<p className={styles.createMain}>Authors</p>
							<LabeledInput name='Author Name' isInvalid={durationIsInvalid} onChange={handleDurationChange} inputClassName={styles.createAuthor}>
								<Button label='CREATE AUTHOR' className={styles.createAuthorButton} />
							</LabeledInput>
							<p className={styles.createMain}>Authors List</p>
							{fakeAuthors.map((author) => (
								<AuthorItem key={author.id} id={author.id} name={author.name} authorItemNameClass={styles.authorsListAuthor} />
							))}
						</div>
						<div className={styles.courseAuthorsPanel}>
							<p className={styles.courseAuthorsPanelTitle}>Course Authors</p>
							<p className={styles.courseAuthorsPanelEmptyList}>Author list is empty</p>
							{fakeAuthors.map((author) => (
								<AuthorItem
									key={author.id}
									id={author.id}
									name={author.name}
									addIsDisabled
									authorItemClass={styles.courseListItem}
									authorItemNameClass={styles.courseListAuthor}
								/>
							))}
						</div>
					</div>
				</form>
			</div>
			<div className={styles.createFooter}>
				<Button label='CREATE COURSE' isSubmit formName={formId} className={styles.createButton} />
				<Link to='courses'>
					<Button label='CANCEL' className={styles.cancelButton} />
				</Link>
			</div>
		</div>
	);
}

export default CreateCourse;
