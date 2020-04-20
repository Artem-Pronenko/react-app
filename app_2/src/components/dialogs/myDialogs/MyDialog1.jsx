import React from 'react';
import c from './MyDialogs.module.sass';
import DialogsMenu from "../dialogMenu/DialogMenu";
import DialogHeader from "./DialogHeader";


const MyDialog1 = ({addMessage, changeMessage, message, newMessageBody}) => {
	const newMessage = message.map(el => {
		return <div key={el.id} className={c.message}>{el.message}</div>
	});

	const onAddMessage = event => {
		event.preventDefault();
		addMessage();
		//dispatch(addMessageActionCreator())
	};

	const onChangeMessage = (event) => {
		changeMessage(event.target.value);
		//dispatch(messageChangeActionCreator(event.target.value));
	};

	return (
		<div className={c.dialog_wrap}>
			<div className={c.dialog_column}>
				<DialogHeader/>
				<div className={c.message_wrap}>
					{newMessage}

				</div>
				<div className={c.dialog_input}>
					<form onSubmit={onAddMessage} action="">
						<textarea
							onChange={onChangeMessage}
							value={newMessageBody}
							cols="45"
							rows="5"
							placeholder={'Ваше смс'}>
						</textarea>
						<button className={c.btn_submit} type='submit'>Отправить</button>
					</form>

				</div>
			</div>
			<DialogsMenu/>
		</div>
	)
};


export default MyDialog1;




