import classes from './Header.module.css';

function Header() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<span>Logo</span>
				Courses
			</div>
		</header>
	);
}

export default Header;
