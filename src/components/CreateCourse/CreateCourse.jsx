import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addAuthor, deleteAuthor } from '../../store/authors/thunk';
import { addCourse, updateCourse } from '../../store/courses/thunk';
import { getCourse } from '../../utils/CoursesHelper';
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
	const params = useParams();
	const courseId = params.courseId ?? null;
	const isEditForm = courseId != null;
	const authors = useSelector((state) => state.authors);
	const courseToEdit = getCourse(
		courseId,
		useSelector((state) => state.courses)
	);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [duration, setDuration] = useState(null);
	const [titleIsInvalid, setTitleIsInvalid] = useState(false);
	const [descriptionIsInvalid, setDescriptionIsInvalid] = useState(false);
	const [durationIsInvalid, setDurationIsInvalid] = useState(false);
	const [courseAuthorIds, setCourseAuthorIds] = useState(courseToEdit?.authors ?? []);

	const getCurrentDate = () => new Date().toJSON().slice(0, 10).split('-').reverse().join('/');

	const validateInputForCourseCreate = (value) => validateInput(value) && value.length > 1;

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

	const handleAddAuthorToCourse = (e, authorId) => {
		e.preventDefault();
		const authorWithTheSameIdAlreadyExists = courseAuthorIds.find((courseAuthorId) => courseAuthorId === authorId) != null;
		if (authorWithTheSameIdAlreadyExists) return;
		const authorToAdd = authors.find((author) => author.id === authorId);
		if (authorToAdd) setCourseAuthorIds([...courseAuthorIds, authorToAdd.id]);
	};

	const handleRemoveAuthorFromCourse = (e, authorId) => {
		e?.preventDefault();
		setCourseAuthorIds([...courseAuthorIds.filter((courseAuthorId) => courseAuthorId !== authorId)]);
	};

	const courseAuthorListIsEmpty = courseAuthorIds.length === 0;

	const handleCreateAuthor = (name) => dispatch(addAuthor(name));

	const handleDeleteAuthor = (e, authorId) => {
		e.preventDefault();
		dispatch(deleteAuthor(authorId));
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
		if (!courseToEdit) {
			dispatch(
				addCourse({
					title,
					description,
					creationDate: getCurrentDate(),
					duration: +duration,
					authors: [...courseAuthorIds],
				})
			);
		} else {
			dispatch(
				updateCourse({
					id: courseId,
					title,
					description,
					creationDate: getCurrentDate(),
					duration: +duration,
					authors: [...courseAuthorIds],
				})
			);
		}

		navigate('/courses');
	}

	return (
		<div className={styles.create}>
			<h3 className={styles.createHeader}>{isEditForm ? 'Edit Course' : 'Create Course'}</h3>
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
							{courseAuthorListIsEmpty ? (
								<p className={styles.courseAuthorsPanelEmptyList}>Author list is empty</p>
							) : (
								authors
									.filter((author) => courseAuthorIds.includes(author.id))
									.map((author) => (
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
