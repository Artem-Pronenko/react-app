import React from 'react';
import './Nav.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Game from "../game/Game";
import Form from "../form/Form";
import Main from '../main/Main';

//import Header from "../header/Header";

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logo: true
		}
	}

	changeLogo = () => {
		this.setState(state => ({
			logo: !state.logo

		}));


	};

	render() {
		const nav = this.props.nav;
		return (
			<Router>
				<nav className={'nav nav-block'}>
					<div className="logo-block">
						<a className={'logo'} href={''}>{this.state.logo ? 'Learn React' : 'React learned!)'}</a>
						<button className={"btn btn-secondary  ml-3"} onClick={this.changeLogo}>Сhange logo</button>
					</div>
					<ul className={'nav'}>
						{Object.keys(nav).map((elem, i) => {
							return <li key={i} className={'nav-item'}><a href={nav[elem]}>{elem}</a></li>
						})}
					</ul>
				</nav>

				<Switch>

					<Route exact path={"/Main"} component={Main}/>
					<Route exact path={"/Game"} component={Game}/>
					<Route exact path={"/Form"} component={Form}/>


				</Switch>
			</Router>
		);
	}
}


export default Nav;
















