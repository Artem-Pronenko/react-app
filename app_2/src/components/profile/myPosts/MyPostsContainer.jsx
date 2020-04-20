import React from 'react';
import {addPostActionCreator, textChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
	const state = props.store.getState();
	const addPost = () => props.store.dispatch(addPostActionCreator());
	const textChange = text => props.store.dispatch(textChangeActionCreator(text));

	return <MyPosts
		addPost={addPost}
		changeInputPost={textChange}
		posts={state.profilePage.posts}
		textInput={state.profilePage.textInput}
	/>

};


export default MyPostsContainer;




