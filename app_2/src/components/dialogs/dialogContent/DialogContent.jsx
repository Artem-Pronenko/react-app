import React from 'react';
import DialogSearch from "./dialogSearch/DialogSearch";
import DialogMessage from "./dialogMessage/DialogMessage";
import c from './DialogContent.module.sass';


const DialogContent = ({dataMessage}) => {

	const message = dataMessage.map(el => {
		return <DialogMessage
			key={el.id}
			avatar={el.avatar}
			author={el.author}
			textMessage={el.message}/>
	});

	return (
		<div className={c.dialog_column}>
			<DialogSearch/>

			{message}

		</div>
	)

};


export default DialogContent;




