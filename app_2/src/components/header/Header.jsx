import React from 'react';
import './Header.sass'
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
		<header className={'header'}>
			<div className="container">
				<NavLink to={'/'} className="logo-go-hom">
					<div className="logo"><span>НЕ</span> Вконтакте</div>
				</NavLink>
			</div>
		</header>
	)
};


export default Header;




