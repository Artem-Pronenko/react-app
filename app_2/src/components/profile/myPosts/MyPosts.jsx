import React from 'react';
import c from './MyPosts.module.sass';
import Post from './post/Post';
import avatar from '../avatar.jpg';

const MyPosts = ({posts, textInput, addPost, changeInputPost}) => {
	const postsItem = posts.map(({date, text, imgUrl, like, comments, views, explain, id}) => {
		return (
			<Post
				key={id}
				date={date}
				text={text}
				imgUrl={imgUrl}
				like={like}
				comments={comments}
				views={views}
				explain={explain}
			/>
		)
	});
	const input = React.createRef();
	const onAddPost = e => {
		e.preventDefault();
		addPost();
	};

	const textChange = e => changeInputPost(input.current.value);

	return (
		<div className={c.profile_post}>
			<div className={c.create_post}>
				<div className={c.create_post_author}>
					<img src={avatar} alt=""/>
				</div>
				<form id={c.form_post} action="" onSubmit={onAddPost}>
					<input
						onChange={textChange}
						value={textInput}
						ref={input}
						type="text"
						placeholder={'Что у Васъ новаго?'}
					/>
				</form>
			</div>

			{postsItem}

		</div>
	)
};


export default MyPosts;




