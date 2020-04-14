import React from 'react';
import c from './MyPosts.module.sass';
import Post from './post/Post';

function MyPosts() {
	return (
		<div className={c.profile_post}>
			<div className={c.create_post}>
				<form action="">
					<input type="text" placeholder={'Что у вас нового?'}/>
				</form>
			</div>

			<Post/>

		</div>
	)
}


export default MyPosts;




