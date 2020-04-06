import React from 'react';
import './Nav.css';


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
		);
	}
}


export default Nav;
















