//
import React from 'react';
import './App.sass';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import MyDialog1 from "./components/dialogs/myDialogs/MyDialog1";

const App = ({state, dispatch}) => {
	const {profilePage, dialogPage} = state;
	return (
		<div className="app-wrapper">
			<Header/>
			<div className="container">
				<Nav/>
				<Route exact path={'/profile'}>
					<Profile dataPost={profilePage} dispatch={dispatch}/>
				</Route>
				<Route exact path={'/dialogs'}>
					<Dialogs dataDialogs={dialogPage}/>
				</Route>

				<Route exact path={'/dialogs/d1'}>
					<MyDialog1/>
				</Route>

			</div>
		</div>
	)
};


export default App;




