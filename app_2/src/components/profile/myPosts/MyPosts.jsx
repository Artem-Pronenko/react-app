import React from 'react';
import c from './MyPosts.module.sass';
import Post from './post/Post';
import avatar from '../avatar.jpg'

const MyPosts = ({posts, addPost, textInput, changeInput}) => {

	const postsItem = posts.map(({date, text, imgUrl, like, comments, views, explain, id}
	) => {
		return <Post
			key={id}
			date={date}
			text={text}
			imgUrl={imgUrl}
			like={like}
			comments={comments}
			views={views}
			explain={explain}
		/>
	});
	const input = React.createRef();
	const addP = event => {
		event.preventDefault();
		addPost();

	};
	const textChange = () => changeInput(input.current.value);

	return (
		<div className={c.profile_post}>
			<div className={c.create_post}>
				<div className={c.create_post_author}>
					<img src={avatar} alt=""/>
				</div>
				<form id={c.form_post} action="" onSubmit={addP}>
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




