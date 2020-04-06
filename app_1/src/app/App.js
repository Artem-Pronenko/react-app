import React from 'react';
import './App.css';
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'


class App extends React.Component {
	render() {
		let nav = this.props.nav;
		return (
			<div className="App">
				<Header nav={nav}/>
				<Main/>
				<Footer/>
			</div>
		);
	}
}


export default App;
