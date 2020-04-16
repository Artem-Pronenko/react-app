//
import React from 'react';
import c from './Nav.module.sass';
import {NavLink} from "react-router-dom";

const Nav = () => {
	return (
		<nav className={c.nav}>
			<ul className={c['nav-list']}>
				<li className={c.item}>
					<NavLink to="/profile">Мой Паспортъ</NavLink>
				</li>
				<li className={c.item}>
					<NavLink to="">Извѣстiя</NavLink>
				</li>
				<li className={c.item}>
					<NavLink to="/dialogs">Письма</NavLink>
				</li>
				<li className={c.item}>
					<NavLink to="">Композицiи</NavLink>
				</li>
				<li className={c.item}>
					<NavLink to="">Настройки</NavLink>
				</li>
			</ul>
		</nav>
	)
};


export default Nav;




