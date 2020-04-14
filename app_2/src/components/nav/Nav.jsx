//
import React from 'react';
import c from './Nav.module.sass';

const Nav = () => {
	return (
		<nav className={c.nav}>
			<ul className={c['nav-list']}>
				<li className={c.item}><a href="">Мой Паспортъ</a></li>
				<li className={c.item}><a href="">Извѣстiя</a></li>
				<li className={c.item}><a href="">Письма</a></li>
				<li className={c.item}><a href="">Композицiи</a></li>
				<li className={c.item}><a href="">Настройки</a></li>
			</ul>
		</nav>
	)
};


export default Nav;




