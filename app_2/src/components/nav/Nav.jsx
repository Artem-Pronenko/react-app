//
import React from 'react';
import c from './Nav.module.sass';

const Nav = () => {
	return (
		<nav className={c.nav}>
			<ul className={c['nav-list']}>
				<li className={c.item}><a href="">Profile</a></li>
				<li className={c.item}><a href="">Messages</a></li>
				<li className={c.item}><a href="">News</a></li>
				<li className={c.item}><a href="">Music</a></li>
				<li className={c.item}><a href="">Settings</a></li>
			</ul>
		</nav>
	)
};


export default Nav;




