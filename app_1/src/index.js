import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

const nav = {
	'Главная': '/index.html',
	'Документация': 'https://reactjs.org',
	'Репозиторий': 'https://github.com/Artem-Pronenko/courses-react'
};
ReactDOM.render(
	<React.StrictMode>
		<App nav={nav}/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
