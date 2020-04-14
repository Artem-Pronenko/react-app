//
import React from 'react';
import './App.sass';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";

function App() {
	return (

		<div className="app-wrapper">

			<Header/>

			<div className="container">
				<Nav/>
				<Profile/>
			</div>

		</div>
	)
}


export default App;




