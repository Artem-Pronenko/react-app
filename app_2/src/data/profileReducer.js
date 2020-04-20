//
const ADD_POST = 'ADD-POST',
	CHANGE_INPUT_POST = 'CHANGE-INPUT-POST';

const profileReducer = (state, action) => {

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