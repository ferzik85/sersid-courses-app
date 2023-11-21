import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from './components/CreateCourse/CreateCourse';
import App from './App';
import store from './store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes path='/'>
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Registration />} />
				<Route path='courses' element={<App />}>
					<Route path=':courseId' element={<CourseInfo />} />
					<Route path='add' element={<CreateCourse />} />
					<Route index element={<Courses />} />
				</Route>
				<Route path='*' element={<Navigate to='/login' />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);
