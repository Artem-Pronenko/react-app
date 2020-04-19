import React from 'react';
import c from './MyDialogs.module.sass';
import DialogsMenu from "../dialogMenu/DialogMenu";
import DialogHeader from "./DialogHeader";


const MyDialog1 = () => {
	return (
		<div className={c.dialog_wrap}>
			<div className={c.dialog_column}>
				<DialogHeader/>
				<div className={c.message_wrap}>
					<div className={c.message}>Lorem ipsum dolor sit</div>
					<div className={c.message}>Lorem ipsum dolor sit</div>
					<div className={c.message}>Lorem ipsum dolor sit</div>

				</div>
				<div className={c.dialog_input}>
					<form action="">
						<textarea cols="45" rows="5" placeholder={'Ваше смс'}></textarea>
						<button className={c.btn_submit} type='submit'>Отправить</button>
					</form>

				</div>
			</div>
			<DialogsMenu/>
		</div>
	)
};


export default MyDialog1;




