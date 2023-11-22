import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addAuthorAction, deleteAuthorAction } from '../../store/authors/actions';
import { addCourseAction } from '../../store/courses/actions';
import Button from '../../common/Button/Button';
import LabeledInput from '../../common/LabeledInput/LabeledInput';
import { ButtonInput } from '../../common/ButtonInput';
import { DurationInput } from '../../common/DurationInput';
import { validateInput } from '../../utils/ValidateInput';
import validateDuration from '../../utils/ValidateDuration';
import AuthorItem from './components/AuthorItem/AuthorItem';
import styles from './CreateCourse.module.css';

function CreateCourse() {
	const formId = 'courseCreateOrEditForm';
	const authors = useSelector((state) => state.authors);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [duration, setDuration] = useState(null);
	const [titleIsInvalid, setTitleIsInvalid] = useState(false);
	const [descriptionIsInvalid, setDescriptionIsInvalid] = useState(false);
	const [durationIsInvalid, setDurationIsInvalid] = useState(false);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const getCurrentDate = () => new Date().toJSON().slice(0, 10).split('-').reverse().join('/');

	const validateInputForCourseCreate = (value) => validateInput(value) && value.length > 1;

	function addAuthor(author) {
		dispatch(addAuthorAction({ ...author, id: uuidv4() }));
	}

	function deleteAuthor(id) {
		dispatch(deleteAuthorAction(id));
	}

	function addCourse(course) {
		dispatch(addCourseAction({ ...course, id: uuidv4() }));
	}

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

	const handleCreateAuthor = (name) => {
		addAuthor({
			name,
		});
	};

	const handleAddAuthorToCourse = (e, authorId) => {
		e.preventDefault();
		const authorWithTheSameIdAlreadyExists = courseAuthors.find((author) => author.id === authorId) != null;
		if (authorWithTheSameIdAlreadyExists) return;
		const authorToAdd = authors.find((author) => author.id === authorId);
		if (authorToAdd) setCourseAuthors([...courseAuthors, authorToAdd]);
	};

	const handleRemoveAuthorFromCourse = (e, authorId) => {
		e?.preventDefault();
		setCourseAuthors([...courseAuthors.filter((author) => author.id !== authorId)]);
	};

	const courseAuthorListIsEmpty = () => courseAuthors.length === 0;

	const handleDeleteAuthor = (e, authorId) => {
		e.preventDefault();
		deleteAuthor(authorId);
		handleRemoveAuthorFromCourse(null, authorId);
	};

	function handleSubmit(e) {
		e.preventDefault();
		const invalidTitle = !validateInputForCourseCreate(title);
		const invalidDescription = !validateInputForCourseCreate(description);
		const invalidDuration = !validateDuration(duration);
		setTitleIsInvalid(invalidTitle);
		setDescriptionIsInvalid(invalidDescription);
		setDurationIsInvalid(!validateDuration(duration));
		if (invalidTitle || invalidDescription || invalidDuration) return;
		addCourse({
			title,
			description,
			creationDate: getCurrentDate(),
			duration: +duration,
			authors: courseAuthors.map((author) => author.id),
		});
		navigate('/courses');
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
					<DurationInput
						name='Duration'
						duration={duration}
						onChange={handleDurationChange}
						isInvalid={durationIsInvalid}
						inputClassName={styles.createDuration}
					/>
					<div className={styles.createAuthorsPanel}>
						<div className={styles.addAuthorsPanel}>
							<p className={styles.createMain}>Authors</p>
							<ButtonInput
								labelName='Author Name'
								buttonName='CREATE AUTHOR'
								onClick={handleCreateAuthor}
								validateInput={validateInputForCourseCreate}
								inputClassName={styles.createAuthor}
							/>
							<p className={styles.createMain}>Authors List</p>
							{authors.map((author) => (
								<AuthorItem key={author.id} id={author.id} name={author.name} onAddClick={handleAddAuthorToCourse} onDeleteClick={handleDeleteAuthor} />
							))}
						</div>
						<div className={styles.courseAuthorsPanel}>
							<p className={styles.courseAuthorsPanelTitle}>Course Authors</p>
							{courseAuthorListIsEmpty() ? (
								<p className={styles.courseAuthorsPanelEmptyList}>Author list is empty</p>
							) : (
								courseAuthors.map((author) => (
									<AuthorItem
										key={author.id}
										id={author.id}
										name={author.name}
										onDeleteClick={handleRemoveAuthorFromCourse}
										addIsDisabled
										authorItemClass={styles.courseListItem}
									/>
								))
							)}
						</div>
					</div>
				</form>
			</div>
			<div className={styles.createFooter}>
				<Button label='CREATE COURSE' type='submit' formName={formId} className={styles.createButton} />
				<Link to='courses'>
					<Button label='CANCEL' className={styles.cancelButton} />
				</Link>
			</div>
		</div>
	);
}

export default CreateCourse;
