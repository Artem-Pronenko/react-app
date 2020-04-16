//
import React from 'react';
import './App.sass';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>
				<div className="container">
					<Nav/>
					<Route path={'/profile'} component={Profile}/>
					<Route path={'/dialogs'} component={Dialogs}/>
				</div>
			</div>
		</BrowserRouter>
	)
};


export default App;




