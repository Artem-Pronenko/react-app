import React from 'react';
import c from './DialogSearch.module.sass';


const DialogSearch = () => {
	return (

		<div className={c.dialog_search}>
			<form className={c.form} action="">
				<input className={c.search} type="text" placeholder={'Поискъ'}/>
			</form>
		</div>

	)
};


export default DialogSearch;




