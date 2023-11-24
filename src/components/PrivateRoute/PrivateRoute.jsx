import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { isAdminUser } from '../../localStorage/StorageAccess';

export function PrivateRoute({ children }) {
	return isAdminUser() ? children : <Navigate to='/courses' />;
}

PrivateRoute.propTypes = {
	children: PropTypes.node,
};
