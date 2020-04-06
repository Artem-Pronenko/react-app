import React from 'react';
import './Nav.css';


class Nav extends React.Component {
	render() {
		const nav = this.props.nav;
		return (
			<nav>
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
















