import React from 'react';
import c from './DialogHeader.module.sass';


const DialogHeader = () => {
	return (


		<div className={c.head}>
			<div className={c.dialog_head}>
				<button className={c.back}>
					Назад
				</button>
			</div>
		</div>


	)
};


export default DialogHeader;