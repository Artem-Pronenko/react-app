import React from 'react';
import c from './MyPosts.module.sass';
import Post from './post/Post';
import postImg from './post/postImg.jpg';
import postImg2 from './post/postImg2.jpg';
import postImg3 from './post/postImg3.jpg';

const dataPost = [
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
];

const MyPosts = () => {

	const posts = dataPost.map((
		{date, text, imgUrl, like, comments, views, explain}
	) => {
		return <Post
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

			{posts}

		</div>
	)
};


export default MyPosts;




