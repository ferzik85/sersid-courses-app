import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import styles from './App.module.css';

function App() {
	return (
		<>
			<Header showUserInfo />
			<div className={styles.app}>
				<Outlet />
			</div>
		</>
	);
}

export default App;
