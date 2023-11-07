import React from 'react';
import classes from './Logo.module.css';
import logo from '../../../assets/epam-logo.svg';

function Logo() {
	return <img className={classes.logo} src={logo} alt='epam-logo' />;
}

export default Logo;
