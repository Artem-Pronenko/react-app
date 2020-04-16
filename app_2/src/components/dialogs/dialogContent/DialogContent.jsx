import React from 'react';
import c from './DialogContent.module.sass';
import DialogSearch from "./DialogSearch";
import avatar from "../../myPosts/post/postImg2.jpg";
import avatar2 from "../../myPosts/post/postImg3.jpg";
import avatar3 from "../../myPosts/post/postImg.jpg";
import DialogMessage from "./dialogMessage/DialogMessage";


const DialogContent = () => {
	return (
		<div className={c.dialog_column}>
			<DialogSearch/>

			<DialogMessage
				avatar={avatar}
				author={`Андрей Ивановъ`}
				textMessage={`Зашел`}

			/>
			<DialogMessage
				avatar={avatar2}
				author={`Сакенъ Макеновъ`}
				textMessage={`Привет! я твой студент. Добавь в группу плиз`}
			/>
			<DialogMessage
				avatar={avatar3}
				author={`Ильдаръ Фазуловъ`}
				textMessage={`Ку`}
			/>
			<DialogMessage
				avatar={avatar2}
				author={`Сакенъ Макеновъ`}
				textMessage={`Добавь в группу плиз`}
			/>
			<DialogMessage
				avatar={avatar2}
				author={`Сакенъ Макеновъ`}
				textMessage={`Привет! я твой студент. `}
			/>

		</div>
	)

};


export default DialogContent;



