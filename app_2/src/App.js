//
import React from 'react';
import './App.sass';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = ({data, addPost}) => {
	const {profilePage, dialogPage} = data;
	return (
		<div className="app-wrapper">
			<Header/>
			<div className="container">
				<Nav/>
				<Route exact path={'/profile'}>
					<Profile dataPost={profilePage} addPost={addPost}/>
				</Route>
				<Route exact path={'/dialogs'}>
					<Dialogs dataDialogs={dialogPage}/>
				</Route>
			</div>
		</div>
	)
};


export default App;




