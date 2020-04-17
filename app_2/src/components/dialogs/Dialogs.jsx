import React from 'react';
import c from './Dialogs.module.sass';
import DialogsMenu from "./dialogMenu/DialogMenu";
import DialogContent from "./dialogContent/DialogContent";

const Dialogs = ({dataDialogs}) => {
	return (
		<div className={c.dialog_wrap}>
			<DialogContent dataMessage={dataDialogs.dataMessage}/>
			<DialogsMenu/>
		</div>
	)
};


export default Dialogs;




