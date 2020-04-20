//
const CHANGE_INPUT_MESSAGE = 'CHANGE-INPUT-MESSAGE',
	SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {
	switch (action.type) {
		case CHANGE_INPUT_MESSAGE:
			state.newMessageBody = action.text;
			return state;
		case SEND_MESSAGE:
			const message = state.newMessageBody;
			let id = state.messageD1[state.messageD1.length - 1].id;
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