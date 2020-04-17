import postImg from './img/postImg.jpg';
import avatar3 from './img/postImg.jpg';
import postImg2 from './img/postImg2.jpg';
import avatar from './img/postImg2.jpg';
import postImg3 from './img/postImg3.jpg';
import avatar2 from './img/postImg3.jpg';

const data = {
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
		]
	},
	dialogPage: {
		dataMessage: [
			{id: 0, avatar: avatar, author: 'Андрей Ивановъ', message: 'Зашел!'},
			{id: 1, avatar: avatar2, author: 'Ильдаръ Фазуловъ', message: 'Привет! я твой студент. Добавь в группу плиз'},
			{id: 2, avatar: avatar3, author: 'Даня Ивановъ', message: 'Добавь в группу плиз'},
			{id: 3, avatar: avatar, author: 'Сакенъ Макеновъ', message: 'Привет! я твой студент!'}
		]
	}
};


export default data