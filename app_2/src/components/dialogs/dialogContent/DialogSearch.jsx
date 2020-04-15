import React from 'react';
import c from './DialogContent.module.sass';


const DialogSearch = () => {
	return (

		<div className={c.dialog_search}>
			<form action="">
				<input className={c.search} type="text" placeholder={'Поискъ'}/>
			</form>
		</div>

	)
};


export default DialogSearch;




