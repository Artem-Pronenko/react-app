import React from 'react';
import './index.sass';
import App from './App';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from './data/data';


const renderApp = (state) => {
	ReactDOM.render(
		<React.StrictMode>

			<BrowserRouter>
				<App
					state={state}
					dispatch={store.dispatch.bind(store)}

				/>
			</BrowserRouter>

		</React.StrictMode>,
		document.getElementById('root')
	);
};

renderApp(store.getState());

store.subscribe(renderApp);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
