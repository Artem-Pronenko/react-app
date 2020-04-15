import React from 'react';
import c from './MyPosts.module.sass';
import Post from './post/Post';
import postImg from './post/postImg.jpg';
import postImg2 from './post/postImg2.jpg';
import postImg3 from './post/postImg3.jpg';

const MyPosts = () => {
	return (
		<div className={c.profile_post}>
			<div className={c.create_post}>
				<form action="">
					<input type="text" placeholder={'Что у вас нового?'}/>
				</form>
			</div>

			<Post
				date={'6 iюл. 2019'}
				text={``}
				imgUrl={postImg3}
				like={4}
				comments={5}
				views={99}
				explain={'обновилъ фотокарточку въ паспортѣ:'}
			/>
			<Post
				date={'24 iюн. 2019'}
				text={``}
				imgUrl={postImg2}
				like={7}
				comments={2}
				views={104}
				explain={'обновилъ фотокарточку въ паспортѣ:'}
			/>

			<Post
				date={'17 iюн. 2019'}
				text={`Действительно годный эвент. трёхдневная конференция от WebDev Summit окончена, было действительно круто. очень много полезной информации, от профессионалов, очень плотная подача. было очень интересно и круто. Попытаюсь попасть к вам на курсы. Жду следующего ивента. советую всем.#webdevsummit #webdevsummit2019`}
				imgUrl={postImg}
				like={1}
				comments={''}
				views={68}
				explain={''}
			/>


		</div>
	)
};


export default MyPosts;




