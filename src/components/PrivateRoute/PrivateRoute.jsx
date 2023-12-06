import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAdmin } from '../../store/user/selectors';

export function PrivateRoute({ children }) {
	const isAdminUser = useSelector(isAdmin);
	return isAdminUser ? children : <Navigate to='/courses' />;
}

PrivateRoute.propTypes = {
	children: PropTypes.node,
};
