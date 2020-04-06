import React from 'react';
import Nav from '../nav/Nav'
import logo from './logo.svg';
import './Header.css'

class Header extends React.Component {
	render() {
		const nav = this.props.nav;
		return (
			<header className="App-header pb-4">
				<Nav nav={nav}/>
				<img src={logo} className="App-logo" alt="logo"/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		)
	}
}

export default Header;
