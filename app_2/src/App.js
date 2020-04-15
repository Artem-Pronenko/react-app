//
import React from 'react';
import './App.sass';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
//import Dialogs from "./components/dialogs/Dialogs";

const App = () => {
	return (
		<div className="app-wrapper">

			<Header/>
			<div className="container">
				<Nav/>
				<Profile/>
				{/*<Dialogs/>*/}
			</div>
		</div>
	)
};


export default App;




