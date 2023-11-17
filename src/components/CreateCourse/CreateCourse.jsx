import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import LabeledInput from '../../common/LabeledInput/LabeledInput';
import Duration from '../../common/Duration/Duration';
import { validateInput } from '../../utils/ValidateInput';
import validateDuration from '../../utils/ValidateDuration';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { addCourse } from '../../utils/CoursesCrud';
import { getAuthors, addAuthor } from '../../utils/AuthorsCrud';
import styles from './CreateCourse.module.css';

function CreateCourse() {
	const formId = 'courseCreateOrEditForm';
	const navigate = useNavigate();
	const [authorName, setAuthorName] = useState(null);
	const [authorNameIsInvalid, setAuthorNameIsInvalid] = useState(false);
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [duration, setDuration] = useState(null);
	const [titleIsInvalid, setTitleIsInvalid] = useState(false);
	const [descriptionIsInvalid, setDescriptionIsInvalid] = useState(false);
	const [durationIsInvalid, setDurationIsInvalid] = useState(false);
	const [authors, setAuthors] = useState(getAuthors());

	const getCurrentDate = () => new Date().toJSON().slice(0, 10).split('-').reverse().join('/');

	function validateTitleOrDescription(value) {
		return validateInput(value) && value.length > 1;
	}

	const handleAuthorNameChange = (value) => {
		setAuthorName(value);
		setAuthorNameIsInvalid(false);
	};

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

	function handleCreateAuthor(e) {
		e.preventDefault();
		const invalidAuthorName = !validateInput(authorName);
		setAuthorNameIsInvalid(invalidAuthorName);

		if (invalidAuthorName) return;

		addAuthor({
			name: authorName,
		});

		setAuthorName(null);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const invalidTitle = !validateTitleOrDescription(title);
		const invalidDescription = !validateTitleOrDescription(description);
		const invalidDuration = !validateDuration(duration);
		setTitleIsInvalid(invalidTitle);
		setDescriptionIsInvalid(invalidDescription);
		setDurationIsInvalid(!validateDuration(duration));

		if (invalidTitle || invalidDescription || invalidDuration) return;

		addCourse({
			title,
			description,
			creationDate: getCurrentDate(),
			duration,
			authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d'],
		});
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
							<LabeledInput name='Author Name' isInvalid={authorNameIsInvalid} onChange={handleAuthorNameChange} inputClassName={styles.createAuthor}>
								<Button label='CREATE AUTHOR' className={styles.createAuthorButton} onClick={(e) => handleCreateAuthor(e)} />
							</LabeledInput>
							<p className={styles.createMain}>Authors List</p>
							{authors.map((author) => (
								<AuthorItem key={author.id} id={author.id} name={author.name} authorItemNameClass={styles.authorsListAuthor} />
							))}
						</div>
						<div className={styles.courseAuthorsPanel}>
							<p className={styles.courseAuthorsPanelTitle}>Course Authors</p>
							<p className={styles.courseAuthorsPanelEmptyList}>Author list is empty</p>
							{authors.map((author) => (
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
