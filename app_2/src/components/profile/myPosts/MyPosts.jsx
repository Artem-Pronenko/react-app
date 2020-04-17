import React from 'react';
import c from './MyPosts.module.sass';
import Post from './post/Post';

const MyPosts = ({posts}) => {

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

	return (
		<div className={c.profile_post}>
			<div className={c.create_post}>
				<form action="">
					<input type="text" placeholder={'Что у вас нового?'}/>
				</form>
			</div>

			{postsItem}

		</div>
	)
};


export default MyPosts;




