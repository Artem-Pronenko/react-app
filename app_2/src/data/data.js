import postImg from './img/postImg.jpg';
import avatar3 from './img/postImg.jpg';
import postImg2 from './img/postImg2.jpg';
import avatar from './img/postImg2.jpg';
import postImg3 from './img/postImg3.jpg';
import avatar2 from './img/postImg3.jpg';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
		this._renderApp(this._state);
	}
};


window.store = store;
export default store






