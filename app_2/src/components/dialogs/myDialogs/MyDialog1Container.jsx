import React from 'react';
import {addMessageActionCreator, messageChangeActionCreator} from "../../../redux/dialogsReducer";
import MyDialog1 from "./MyDialog1";


const MyDialog1Container = props => {
	const state = props.store.getState();
	const addMessage = event => props.store.dispatch(addMessageActionCreator());
	const changeMessage = text => props.store.dispatch(messageChangeActionCreator(text));

	return (
		<MyDialog1
			addMessage={addMessage}
			changeMessage={changeMessage}
			message={state.dialogPage.messageD1}
			newMessageBody={state.dialogPage.newMessageBody}
		/>
	)
};


export default MyDialog1Container;




