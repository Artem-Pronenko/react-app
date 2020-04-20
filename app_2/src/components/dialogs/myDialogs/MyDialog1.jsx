import React from 'react';
import c from './MyDialogs.module.sass';
import DialogsMenu from "../dialogMenu/DialogMenu";
import DialogHeader from "./DialogHeader";
import {addMessageActionCreator, messageChangeActionCreator} from "../../../data/dialogsReducer";


const MyDialog1 = ({dialogPage, dispatch}) => {
	const newMessage = dialogPage.messageD1.map(el => {
		return (
			<div key={el.id} className={c.message}>{el.message}</div>
		)
	});

	const addMessage = event => {
		event.preventDefault();
		dispatch(addMessageActionCreator())

	};

	const changeMessage = (event) => {
		dispatch(messageChangeActionCreator(event.target.value));
	};

	return (
		<div className={c.dialog_wrap}>
			<div className={c.dialog_column}>
				<DialogHeader/>
				<div className={c.message_wrap}>
					{newMessage}

				</div>
				<div className={c.dialog_input}>
					<form onSubmit={addMessage} action="">
						<textarea
							onChange={changeMessage}
							value={dialogPage.newMessageBody}
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




