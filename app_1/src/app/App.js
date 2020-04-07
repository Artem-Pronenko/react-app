import React from 'react';
import './App.css';
import Nav from '../nav/Nav'
import Header from "../header/Header";


class App extends React.Component {
	render() {
		let nav = this.props.nav;
		return (
			<div className="App">
				<Header/>
				<Nav nav={nav}/>
			</div>
		);
	}
}


export default App;
