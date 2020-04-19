import postImg from './img/postImg.jpg';
import avatar3 from './img/postImg.jpg';
import postImg2 from './img/postImg2.jpg';
import avatar from './img/postImg2.jpg';
import postImg3 from './img/postImg3.jpg';
import avatar2 from './img/postImg3.jpg';

const ADD_POST = 'ADD-POST',
	CHANGE_INPUT_POST = 'CHANGE-INPUT-POST',
	CHANGE_INPUT_MESSAGE = 'CHANGE-INPUT-MESSAGE',
	SEND_MESSAGE = 'SEND-MESSAGE';

const store = {
	_state: {
		profilePage: {
			posts: [
				{
					id: 0,
					date: '6 iюл. 2019',
					imgUrl: postImg3,
					like: 4,
					comments: 5,
					views: 99,
					explain: 'обновилъ фотокарточку въ паспортѣ:', text: ''
				},
				{
					id: 1,
					date: '24 iюн. 2019',
					imgUrl: postImg2,
					like: 7,
					comments: 2,
					views: 104,
					explain: 'обновилъ фотокарточку въ паспортѣ:', text: ''
				},
				{
					id: 2,
					date: '17 iюн. 2019',
					imgUrl: postImg,
					like: 1,

					comments: '',
					views: 68,

					explain: '',
					text: 'Действительно годный эвент. трёхдневная конференция от WebDev Summit окончена, было действительно круто. очень много полезной информации, от профессионалов, очень плотная подача. было очень интересно и круто. Попытаюсь попасть к вам на курсы. Жду следующего ивента. советую всем.#webdevsummit #webdevsummit2019'
				},
			],
			textInput: ''
		},
		dialogPage: {
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
		}
	},
	_renderApp() {
	},
	getState() {
		return this._state;
	},
	subscribe(listener) {
		this._renderApp = listener;
	},
	dispatch(action) {
		if (action.type === ADD_POST) {
			let id = this._state.profilePage.posts[0].id - 1;
			const nevPosts = {
				id: id--,
				date: '17 апр. 2020',
				imgUrl: '',
				like: '',
				comments: '',
				views: 1,
				explain: '',
				text: this._state.profilePage.textInput
			};
			this._state.profilePage.posts.unshift(nevPosts);
			this._state.profilePage.textInput = '';
			this._renderApp(this._state)

		} else if (action.type === CHANGE_INPUT_POST) {
			this._state.profilePage.textInput = action.text;
			this._renderApp(this._state);

		} else if (action.type === CHANGE_INPUT_MESSAGE) {
			this._state.dialogPage.newMessageBody = action.text;
			this._renderApp(this._state)

		} else if (action.type === SEND_MESSAGE) {
			const message = this._state.dialogPage.newMessageBody;
			let id = this._state.dialogPage.messageD1[this._state.dialogPage.messageD1.length - 1].id;
			this._state.dialogPage.newMessageBody = '';
			this._state.dialogPage.messageD1.push({id: ++id, message: message});
			this._renderApp(this._state)
		}
	}
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const textChangeActionCreator = text => ({type: CHANGE_INPUT_POST, text: text});

export const messageChangeActionCreator = text => ({type: CHANGE_INPUT_MESSAGE, text: text});
export const addMessageActionCreator = () => ({type: SEND_MESSAGE});

window.store = store;
export default store






