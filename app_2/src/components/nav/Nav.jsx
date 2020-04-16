import React from 'react';
import c from './Nav.module.sass';
import Link from "./Link";

const Nav = () => {
	return (
		<nav className={c.nav}>
			<div className={c['nav-list']}>

				<Link text={'Паспортъ'} originClass={c.profile} href={"/profile"}/>
				<Link text={'Извѣстiя'} originClass={c.news} href={"/news"}/>
				<Link text={'Письма'} originClass={c.dialogs} href={"/dialogs"}/>
				<Link text={'Композицiи'} originClass={c.music} href={"/music"}/>
				<Link text={'Настройки'} originClass={c.settings} href={"/settings"}/>

			</div>
		</nav>
	)
};


export default Nav;




