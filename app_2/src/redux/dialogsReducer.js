//
import avatar3 from './img/postImg.jpg';
import avatar from './img/postImg2.jpg';
import avatar2 from './img/postImg3.jpg';

const CHANGE_INPUT_MESSAGE = 'CHANGE-INPUT-MESSAGE',
	SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dataMessage: [
		{
			id: 0,
			avatar: avatar,
			author: 'Андрей Ивановъ',
			message: 'Зашел!',
			linkHref: `/d1`
		},
		{
			id: 1,
			avatar: avatar2,
			author: 'Ильдаръ Фазуловъ',
			message: 'Привет! я твой студент. Добавь в группу плиз',
			linkHref: `/d2`
		},
		{
			id: 2,
			avatar: avatar3,
			author: 'Даня Ивановъ',
			message: 'Добавь в группу плиз',
			linkHref: `/d3`
		},
		{
			id: 3,
			avatar: avatar,
			author: 'Сакенъ Макеновъ',
			message: 'Привет! я твой студент!',
			linkHref: `/d4`
		}
	],
	messageD1: [
		{
			id: 0, message: 'Привет привет!!'
		},

	],
	newMessageBody: '',
};

export const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_INPUT_MESSAGE:
			state.newMessageBody = action.text;
			return state;
		case SEND_MESSAGE:
			const message = state.newMessageBody;
			let id = state.messageD1[0] !== undefined ? state.messageD1[state.messageD1.length - 1].id : 0;
			state.newMessageBody = '';
			state.messageD1.push({id: ++id, message: message});
			return state;
		default:
			return state;
	}
};

export const messageChangeActionCreator = text => ({type: CHANGE_INPUT_MESSAGE, text: text});
export const addMessageActionCreator = () => ({type: SEND_MESSAGE});


export default dialogsReducer