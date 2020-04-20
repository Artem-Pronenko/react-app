//
import postImg from './img/postImg.jpg';
import postImg2 from './img/postImg2.jpg';
import postImg3 from './img/postImg3.jpg';

const ADD_POST = 'ADD-POST',
	CHANGE_INPUT_POST = 'CHANGE-INPUT-POST';


let initialState = {
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
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let id = state.posts[0].id - 1;
			const nevPosts = {
				id: id--,
				date: '17 апр. 2020',
				imgUrl: '',
				like: '',
				comments: '',
				views: 1,
				explain: '',
				text: state.textInput
			};
			state.posts.unshift(nevPosts);
			state.textInput = '';
			return state;
		case CHANGE_INPUT_POST:
			state.textInput = action.text;
			return state;
		default:
			return state;
	}

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const textChangeActionCreator = text => ({type: CHANGE_INPUT_POST, text: text});

export default profileReducer