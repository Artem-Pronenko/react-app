import React from 'react';
import c from './Dialogs.module.sass';
import DialogsMenu from "./dialogMenu/DialogMenu";

const Dialogs = () => {
	return (
		<div className={c.dialog_wrap}>

			<div className={c.dialog_column}>
				dialog_column
			</div>

			<DialogsMenu/>
		</div>
	)
};


export default Dialogs;




