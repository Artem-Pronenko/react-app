import React from 'react';
import c from './Nav.module.sass';
import {NavLink} from "react-router-dom";

const Link = ({href, text, originClass}) => {
	return (

		<NavLink
			activeClassName={c.active}
			className={`${c.item} ${originClass}`}
			to={href}>{text}
		</NavLink>

	)
};


export default Link;




