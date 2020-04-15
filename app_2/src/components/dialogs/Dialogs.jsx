import React from 'react';
import c from './Dialogs.module.sass';
import DialogsMenu from "./dialogMenu/DialogMenu";
import DialogContent from "./dialogContent/DialogContent";

const Dialogs = () => {
	return (
		<div className={c.dialog_wrap}>
			<DialogContent/>
			<DialogsMenu/>
		</div>
	)
};


export default Dialogs;




