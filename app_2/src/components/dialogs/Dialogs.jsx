import React from 'react';
import c from './Dialogs.module.sass';
import DialogsMenu from "./dialogMenu/DialogMenu";
import DialogContent from "./dialogContent/DialogContent";

const Dialogs = props => {
	const state = props.store.getState();

	return (
		<div className={c.dialog_wrap}>
			<DialogContent dataMessage={state.dialogPage.dataMessage}/>
			<DialogsMenu/>
		</div>
	)
};


export default Dialogs;




