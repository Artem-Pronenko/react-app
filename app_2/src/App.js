//
import React from 'react';
import './App.sass';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import MyDialog1Container from "./components/dialogs/myDialogs/MyDialog1Container";

const App = props => {

	return (
		<div className="app-wrapper">
			<Header/>
			<div className="container">
				<Nav/>
				<Route exact path={'/profile'}>
					<Profile store={props.store}/>
				</Route>
				<Route exact path={'/dialogs'}>
					<Dialogs store={props.store}/>
				</Route>

				<Route exact path={'/dialogs/d1'}>
					<MyDialog1Container store={props.store}/>
				</Route>

			</div>
		</div>
	)
};


export default App;




