import React from 'react';
import logo from './logo.svg';

import './Header.css'

class Header extends React.Component {
	render() {
		return (
			<header className="App-header pb-3">
				<img src={logo} className="App-logo" alt="logo"/>
				<h1>
					React!
				</h1>

			</header>
		)
	}
}

export default Header;
