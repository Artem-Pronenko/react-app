import React from 'react';
import DialogSearch from "./dialogSearch/DialogSearch";
import DialogMessage from "./dialogMessage/DialogMessage";
import c from './DialogContent.module.sass';


const DialogContent = ({dataMessage}) => {

	const dialog = dataMessage.map(el => {
		return (
			<DialogMessage
				key={el.id}
				avatar={el.avatar}
				author={el.author}
				textMessage={el.message}
				linkHref={`/dialogs${el.linkHref}`}
			/>
		)
	});

	return (
		<div className={c.dialog_column}>
			<DialogSearch/>

			{dialog}

		</div>
	)

};


export default DialogContent;




