import React from 'react';
import c from './MyDialogs.module.sass';
import DialogsMenu from "../dialogMenu/DialogMenu";
import DialogHeader from "./dialogHeader/DialogHeader";


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
				<div className={c.dialog}>
					<DialogHeader/>

					<div className={c.dialog_message}>
						<div className={c.message_block}>
							{newMessage}
						</div>
					</div>

				</div>
				<div className={c.submit}>
					<form onSubmit={onAddMessage} action="">
						<input
							onChange={onChangeMessage}
							value={newMessageBody}
							type={'text'}
							placeholder={'Ваше смс'}>
						</input>
						<button className={c.btn_submit} type='submit'>Отправить</button>
					</form>
				</div>
			</div>

			<DialogsMenu/>
		</div>
	)
};


export default MyDialog1;




