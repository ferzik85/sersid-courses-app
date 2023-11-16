import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
	<BrowserRouter>
		<Routes path='/'>
			<Route path='login' element={<Login />} />
			<Route path='register' element={<Registration />} />
			<Route path='courses' element={<App />} />
			<Route path='*' element={<Navigate to='/login' />} />
		</Routes>
	</BrowserRouter>
);
