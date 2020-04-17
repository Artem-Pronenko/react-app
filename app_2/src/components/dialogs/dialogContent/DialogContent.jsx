import React from 'react';
import DialogSearch from "./dialogSearch/DialogSearch";
import DialogMessage from "./dialogMessage/DialogMessage";
import c from './DialogContent.module.sass';
import avatar from "../../profile/myPosts/post/postImg2.jpg";
import avatar2 from "../../profile/myPosts/post/postImg3.jpg";
import avatar3 from "../../profile/myPosts/post/postImg.jpg";

const dataMessage = [
	{id: 0, avatar: avatar, author: 'Андрей Ивановъ', message: 'Зашел!'},
	{id: 1, avatar: avatar2, author: 'Ильдаръ Фазуловъ', message: 'Привет! я твой студент. Добавь в группу плиз'},
	{id: 2, avatar: avatar3, author: 'Даня Ивановъ', message: 'Добавь в группу плиз'},
	{id: 3, avatar: avatar, author: 'Сакенъ Макеновъ', message: 'Привет! я твой студент!'}
];

const DialogContent = () => {

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




