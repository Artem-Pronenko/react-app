import React from 'react';
import c from './DialogMenu.module.sass';

const DialogsMenu = () => {
	return (
		<div className={c.menu}>
			<ul className={c.menu_list}>
				<li className={c.menu_item}>
					<a href="">Всѣ письма</a>
				</li>
				<li className={c.menu_item}>
					<a href="">Непрочитанныя</a>
				</li>
				<li className={c.menu_item}>
					<a href="">Цѣнные письма</a>
				</li>
			</ul>
		</div>
	)
};


export default DialogsMenu;




