import React from 'react';
import c from './MyDialogs.module.sass';


const DialogHeader = () => {
	return (

		<div>
			<div className={c.dialog_head_wrap}>
				<div className={c.dialog_head}>
					<button className={c.back}>
						Назад
					</button>
				</div>
			</div>
		</div>

	)
};


export default DialogHeader;