import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
//import * as serviceWorker from './serviceWorker';
//import data, {addPost} from './data/data';
import {BrowserRouter} from "react-router-dom";
import {addPost} from './data/data'

export const renderApp = (data) => {
	ReactDOM.render(
		<React.StrictMode>

			<BrowserRouter>
				<App data={data} addPost={addPost}/>
			</BrowserRouter>

		</React.StrictMode>,
		document.getElementById('root')
	);
};
