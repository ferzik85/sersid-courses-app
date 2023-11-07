import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import classes from './App.module.css';

function App() {
	return (
		<main className={classes.main}>
			<Header />
			<Body />
		</main>
	);
}

export default App;
